import User from "../../models/userSchema.js"


const createPost = async (req, res) => {
        console.log(req.body);
        try {
            // 요청 본문에서 이메일을 사용하여 사용자 조회
            const user = await User.findOne({ email: req.body.email });
    
            if (!user) {
                // 로그인 없이 글을 작성하려는 경우, 401 코드 반환
                return res.status(401).json({
                    registerSuccess: false,
                    message: "로그인 후 게시글 작성이 가능합니다."
                });
            } else {
                // 게시글 작성 데이터
                const postDetails = {
                    content: req.body.content,
                    postProfileImg: user.profileImg,
                    postNickname : user.nickname,
                    like: [],
                    heart: [],
                    smile: [],
                    angry: [],
                    sad: [],
                    comment: []
                };
    
                // 새 게시글 생성
                const newPost = new Post(postDetails);
    
                // 데이터베이스에 게시글 저장
                const savedPost = await newPost.save();
    
                // 성공적으로 저장되면 201 코드와 함께 게시글 데이터 반환
                return res.status(201).json({
                    registerSuccess: true,
                    post: savedPost
                });
            }
        } catch (error) {
            // 에러 발생 시 500 코드와 함께 에러 메시지 반환
            return res.status(500).json({
                registerSuccess: false,
                message: error.message
            });
        }
}

export { createPost };