import MyMind from "../../models/myMindSchema.js";

const postMyMind = async (req, res) => {
    
        let myMindRegister = {
            userId : req.body.userId,
            userEmail:req.body.userEmail,
            questions: req.body.questions,
            createdAt: req.body.createdAt
        };
        
        await MyMind.create(myMindRegister);
        return res.status(200).json({
            registerSuccess: true,
            message: "나의 마음보기 등록 완료",
        });
    
};

const getTodayExistence = async (req, res) => {
    const { createdAt } = req.body;
    const { date } = req.query;
    const userEmail = req.user.email;
    try {
        let myMind = await MyMind.findOne({userEmail:userEmail, createdAt: date });
        res.status(200).json(myMind);
    } catch (error) {
        console.error('에러 발생:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
};

const getCalendar = async (req, res) => {
    
    const userEmail = req.user.email;
    try {
        let myMinds=await MyMind.find({ userEmail: userEmail });
        res.status(200).json(myMinds);
    } catch (error) {
        console.error('에러 발생:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
    
};

const getMyMind = async (req, res) => {
    
    const { date } = req.query;
    const userEmail = req.user.email;
    try {
        let myMind = await MyMind.findOne({userEmail:userEmail, createdAt: date });
        if (!myMind) {
            return res.status(400).json({ message: '해당 날짜에 데이터가 없습니다.' });
        }
        res.status(200).json(myMind.questions);
    } catch (error) {
        console.error('에러 발생:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
};

const updateMyMind = async (req, res) => {
    const { date } = req.query;
    const updatedData = req.body;
    const userEmail = req.user.email;

    try {
        let updatedMyMind = await MyMind.findOneAndUpdate(
            { userEmail:userEmail, createdAt: date }, //업데이트할 문서를 찾기 위한 쿼리 조건
            { $set: { questions: updatedData } }, //업데이트할 필드
            { new: true } //업데이트된 문서를 반환한다.
        );        
        res.status(200).json(updatedMyMind.questions);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
};

const deleteMyMind = async (req, res) => {
    const { createdAt } = req.body;
    const userEmail = req.user.email;

    try {
        // MyMind 모델을 사용하여 데이터 삭제
        const deletedData = await MyMind.deleteOne({ userEmail:userEmail,createdAt:createdAt });
        
        if (deletedData.deletedCount === 0) {
            throw new Error('삭제할 데이터를 찾지 못했습니다.');
        }

        // 클라이언트에 성공 응답 전송
        res.status(200).json({ message: '데이터 삭제 성공' });
    } catch (error) {
        // 에러 발생 시 클라이언트에 에러 응답 전송
        console.error('데이터 삭제 중 에러:', error);
        res.status(500).json({ error: '데이터 삭제에 실패했습니다.' });
    }

}




export {postMyMind,getTodayExistence,getCalendar,getMyMind,updateMyMind,deleteMyMind}