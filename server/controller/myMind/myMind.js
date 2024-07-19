import MyMind from "../../models/myMindSchema.js";

//MyMind 등록
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

//해당 유저가 오늘 작성한 MyMind 조회
const getTodayExistence = async (req, res) => {
    
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

//해당 유저가 작성한 MyMind 전체 조회
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

// 해당 유저가 쿼리로 보낸 날짜에 해당하는 MyMind 조회
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

//해당 유저가 쿼리로 보낸 날짜의 MyMind의 questions를 수정 
const updateMyMind = async (req, res) => {
    
    const { date } = req.query;
    const updatedData = req.body;
    const userEmail = req.user.email;

    try {
        let updatedMyMind = await MyMind.findOneAndUpdate(
            { userEmail:userEmail, createdAt: date }, 
            { $set: { questions: updatedData } }, 
            { new: true } 
        );        
        res.status(200).json(updatedMyMind.questions);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
};

//해당 유저가 쿼리로 보낸 날짜의 MyMind 삭제
const deleteMyMind = async (req, res) => {
    const { createdAt } = req.body;
    const userEmail = req.user.email;

    try {
        const deletedData = await MyMind.deleteOne({ userEmail:userEmail,createdAt:createdAt });
        if (deletedData.deletedCount === 0) {
            throw new Error('삭제할 데이터를 찾지 못했습니다.');
        }
        res.status(200).json({ message: '데이터 삭제 성공' });
    } catch (error) {
        console.error('데이터 삭제 중 에러:', error);
        res.status(500).json({ error: '데이터 삭제에 실패했습니다.' });
    }
}

export {postMyMind,getTodayExistence,getCalendar,getMyMind,updateMyMind,deleteMyMind}