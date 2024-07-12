import OurToday from "../../models/ourTodaySchema.js";
import User from "../../models/userSchema.js"
import Comment from "../../models/ourTodayCommentSchema.js"

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
                like: req.body.like,
                heart: req.body.heart,
                smile: req.body.smile,
                angry: req.body.angry,
                sad: req.body.sad,
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
        const posts = await OurToday.find().sort({"_id": -1});
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



const updateOurTodayPost = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        const content = req.body.content;
        const user = {_id:findPost._id}
        const updatedPost = {content: content} 
        await OurToday.updateOne(user, {"$set" : updatedPost });
        const getPost = await OurToday.findOne({_id: req.body.id}).lean();
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayPost = async(req, res) => {
    try {
        const deletedId = req.body._id;
        const deletedPost = await OurToday.findOne({_id: deletedId}).lean();
        const deletedComment = await Comment.find({postId: deletedId}).lean();
        const deletedPostId = deletedPost._id;
        console.log("찾은 아이디", deletedPost)
        await Comment.deleteMany(deletedComment);
        await OurToday.deleteOne(deletedPostId);
        res.status(200).json({ message: '데이터 삭제 성공' });
    } catch (error) {
        // 에러 발생 시 클라이언트에 에러 응답 전송
        console.error('데이터 삭제 중 에러:', error);
        res.status(500).json({ error: '데이터 삭제에 실패했습니다.' });
    }
}

const updateOurTodayPostHeartReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        console.log("Heart 반응 게시글")
        console.log(findPost);
        const heartUser = req.body.userEmail;
        const updateUser = await OurToday.updateOne({_id: findPost._id}, {$push : { heart : heartUser}});
        console.log("업데이트 직후")
        console.log(updateUser);
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        console.log(getPost);
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayPostHeartReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        const deleteUser = req.body.userEmail; 
        await OurToday.updateOne({_id: findPost._id}, {$pull: {heart: deleteUser} });
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const updateOurTodayPostLikeReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        console.log("Like 반응 게시글")
        console.log(findPost);
        const likeUser = req.body.userEmail;
        const updateUser = await OurToday.updateOne({_id: findPost._id}, {$push : { like : likeUser}});
        console.log("업데이트 직후")
        console.log(updateUser);
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        console.log(getPost);
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayPostLikeReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        const deleteUser = req.body.userEmail; 
        await OurToday.updateOne({_id: findPost._id}, {$pull: {like: deleteUser} });
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const updateOurTodayPostSmileReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        console.log("Like 반응 게시글")
        console.log(findPost);
        const smileUser = req.body.userEmail;
        const updateUser = await OurToday.updateOne({_id: findPost._id}, {$push : { smile : smileUser}});
        console.log("업데이트 직후")
        console.log(updateUser);
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        console.log(getPost);
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayPostSmileReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        const deleteUser = req.body.userEmail; 
        await OurToday.updateOne({_id: findPost._id}, {$pull: {smile: deleteUser} });
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const updateOurTodayPostSadReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        console.log("Like 반응 게시글")
        console.log(findPost);
        const sadUser = req.body.userEmail;
        const updateUser = await OurToday.updateOne({_id: findPost._id}, {$push : { sad : sadUser}});
        console.log("업데이트 직후")
        console.log(updateUser);
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        console.log(getPost);
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayPostSadReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        const deleteUser = req.body.userEmail; 
        await OurToday.updateOne({_id: findPost._id}, {$pull: {sad: deleteUser} });
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const updateOurTodayPostAngryReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        console.log("Like 반응 게시글")
        console.log(findPost);
        const angryUser = req.body.userEmail;
        const updateUser = await OurToday.updateOne({_id: findPost._id}, {$push : { angry : angryUser}});
        console.log("업데이트 직후")
        console.log(updateUser);
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        console.log(getPost);
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayPostAngryReaction = async(req, res) => {
    try {
        const findPost = await OurToday.findOne({_id: req.body.id}).lean();
        const deleteUser = req.body.userEmail; 
        await OurToday.updateOne({_id: findPost._id}, {$pull: {angry: deleteUser} });
        const getPost = await OurToday.findOne({_id: findPost._id}).lean();
        res.status(200).json(getPost);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const createCommentOurToday = async(req, res) => {
    try {
        const { postId, commentUserNickName,commentText, commentUser, commentProfileImg} = req.body;
        const commentDetail = {
            postId: postId,
            commentText: commentText,
            commentUser: commentUser,
            commentUserNickName: commentUserNickName,
            commentProfileImg: commentProfileImg,
            createdAt: new Date().toISOString()
        };
        const savedComment = await Comment.create(commentDetail);
        res.status(201).json(savedComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ message: 'Failed to create comment', error });
    }
}


const getOurTodayComment = async(req, res) => {
    try{
        console.log("댓글 fetch요청")
        const comments = await Comment.find({})
        console.log(comments);
        if(comments){
            return res.status(200).json(comments);
        }else{
            return res.status(404).json({
                message: '댓글이 존재하지 않습니다.'
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

const updateOurTodayComment = async (req, res) => {
    try {
        const findComment = await Comment.findOne({_id: req.body.id}).lean();
        const commentText = req.body.commentText;
        const comment = {_id:findComment._id}
        const updatedComment = {commentText: commentText} 
        await Comment.updateOne(comment, {"$set" : updatedComment });
        const getComment = await Comment.findOne({_id: req.body.id}).lean();
        res.status(200).json(getComment);
    } catch (error) {
        console.error('데이터 업데이트 실패:', error);
        res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
}

const deleteOurTodayComment = async(req, res) => {
    try {
        const deletedId = req.body._id;
        await Comment.deleteOne({_id: deletedId});
        res.status(200).json({ message: '데이터 삭제 성공' });
    } catch (error) {
        // 에러 발생 시 클라이언트에 에러 응답 전송
        console.error('데이터 삭제 중 에러:', error);
        res.status(500).json({ error: '데이터 삭제에 실패했습니다.' });
    }
}

const getOurTodayBestPost = async(req, res) => {
    try{
        console.log("베스트 게시물 찾기")
        const bestPost = await OurToday.findOne().sort({"heart.length": -1});
        console.log(bestPost);
        if(bestPost){
            return res.status(200).json(bestPost);
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

export { createPostOurToday, getOurTodayPost, updateOurTodayPost, deleteOurTodayPost, updateOurTodayPostHeartReaction, deleteOurTodayPostHeartReaction, updateOurTodayPostLikeReaction, deleteOurTodayPostLikeReaction, updateOurTodayPostSmileReaction, deleteOurTodayPostSmileReaction, updateOurTodayPostSadReaction, deleteOurTodayPostSadReaction, updateOurTodayPostAngryReaction, deleteOurTodayPostAngryReaction, createCommentOurToday, getOurTodayComment, updateOurTodayComment, deleteOurTodayComment, getOurTodayBestPost};