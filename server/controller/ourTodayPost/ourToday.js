import { Comment } from "../../models/ourTodaySchema.js";
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
                userProfileImg: user.profileImg,
                userNickname: user.nickname,
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
                commentsCount: 0,
                comment: []
            };

            // 새 게시글 생성
            // const newPost = new OurToday(postDetails);
            // console.log("새 게시글 생성")
            // // 데이터베이스에 게시글 저장
            // const savedPost = await newPost.save();
            console.log("게시글 db 저장")
            // await OurToday.create(postDetails);
            const savedPost = {}
            // console.log("게시글 저장")

            // 성공적으로 저장되면 201 코드와 함께 게시글 데이터 반환
            return res.status(201).json({
                registerSuccess: true,
                post: savedPost
            });
        } catch (error) {
            // 에러 발생 시 500 코드와 함께 에러 메시지 반환
            return res.status(500).json({
                registerSuccess: false,
                message: error.message
            });
        }
}

export { createPostOurToday };