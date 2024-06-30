import OurToday from "../../models/ourTodaySchema.js";
import User from "../../models/userSchema.js"


const createPostOurToday = async (req, res) => {
        console.log(req.body);
        try {
            // 요청 본문에서 이메일을 사용하여 사용자 조회
            const user = await User.findOne({ email: req.body.userEmail });
            console.log("findOne 실행")
            // 게시글 작성 데이터
            const postDetails = {
                userEmail : req.body.userEmail,
                content: req.body.content,
                userProfileImg: req.body.userProfileImg,
                userNickname: req.body.userNickname,
                like: {
                    thumbsUpUsers : [],
                    thumbsUpCount : 0,
                },
                heart: {
                    heartUsers : [],
                    heartCount : 0,
                },
                smile: {
                    smileUsers : [],
                    smileCount : 0,
                },
                angry: {
                    angryUsers : [],
                    angryCount : 0,
                },
                sad: {
                    sadUsers : [],
                    sadCount : 0,
                },
            };

            // 새 게시글 생성
            // const newPost = new OurToday(postDetails);
            // console.log("새 게시글 생성")
            // // 데이터베이스에 게시글 저장
            // const savedPost = await newPost.save();
            console.log("게시글 db 저장")
            console.log(postDetails);
            // await OurToday.create(postDetails);
            const savedPost = await OurToday.create(postDetails);
            console.log(savedPost);
            console.log("게시글 저장")

            // 성공적으로 저장되면 201 코드와 함께 게시글 데이터 반환
            return res.status(201).json({
                registerSuccess: true,
                post: savedPost
            });
        }catch(error){    
            //에러 발생 시 500 코드와 함께 에러 메시지 반환
            return res.status(500).json({
                registerSuccess: false,
                message: error.message
            });
        }
}

const getOurTodayPost = async(req, res) => {
    try{
        const posts = await OurToday.find().sort({ createdAt: -1 });
        console.log(posts);
        if(posts){
            return res.status(200).json(posts);
        }else{
            return res.status(404).json({
                message: '게시글이 존재하지 않습니다.'
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

const getMyTodayPost = async(req, res) => {
    console.log(req.body)
    try{
        const posts = await OurToday.find({userEmail : req.body.userEmail});
        if(posts){
            return res.status(200).json(posts);
        }else{
            return res.status(404).json({
                message: '게시글이 존재하지 않습니다.'
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

const updateOurTodayPost = async(req, res) => {
    try {
        let updatedOurToday = await OurToday.updateOne(
            { _id : OurToday._id },
            { $set : { content : req.body.content} }
        );        
        res.status(200).json(updatedOurToday);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayPost = async(req, res) => {
    console.log(req.body);
    // const { _id } = req.body;
    // try {
    //     const deletedData = await MyMind.deleteOne({ _id : id });
    //     if (deletedData.deletedCount === 0) {
    //         throw new Error('삭제할 데이터를 찾지 못했습니다.');
    //     }
    //     // 클라이언트에 성공 응답 전송
    //     res.status(200).json({ message: '데이터 삭제 성공' });
    // } catch (error) {
    //     // 에러 발생 시 클라이언트에 에러 응답 전송
    //     console.error('데이터 삭제 중 에러:', error);
    //     res.status(500).json({ error: '데이터 삭제에 실패했습니다.' });
    // }
}

export { createPostOurToday, getOurTodayPost, getMyTodayPost, updateOurTodayPost, deleteOurTodayPost };