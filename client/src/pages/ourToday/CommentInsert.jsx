import React, { useEffect, useState } from 'react';
import S from './style';
import useInput from '../../hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const CommentInsert = ({post, showWindow, setOurTodayCommentUpdate, ourTodayCommentUpdate, commentLength}) => {
    const currentUser = useSelector((state)=>state.login.currentUser);
    const [value, setValue, onChangeValue] = useInput("")
    const [todayProfileImg, setTodayProfileImg] = useState("");
    const [isCommentChange, setIsCommentChange] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setIsCommentChange(!isCommentChange);
        }
    };

    const handleCommentInsert = ()=>{
        setIsCommentChange(!isCommentChange)
    };


    const createComment = async () => {
        console.log(value);
        try {
            const response = await fetch(`http://localhost:8000/ourToday/writeComment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postId: post._id,
                    commentText: value,
                    commentUser: currentUser.email,
                    commentProfileImg: todayProfileImg,
                    commentUserNickName: currentUser.nickname,
                }),
            });
            if (response.ok) {
                const result = await response.json();
                setValue(""); // 입력값 초기화
                setOurTodayCommentUpdate(!ourTodayCommentUpdate)
                console.log(result);
            } else {
                console.error('Failed to submit post');
            }
        } catch (error) {
            console.error('An error occurred while submitting the post:', error);
        }
    };


    useEffect(() => {
        const fetchUserProfileImage = async () => {
            try {
                    const response = await fetch(`http://localhost:8000/user/getProfile/${currentUser.email}`);
                    const data = await response.json();
                    setTodayProfileImg(data.profileImg);
                } catch (error) {
                    console.error("Failed to fetch user profile image", error);
                }
        };
        fetchUserProfileImage();
    }, [showWindow, currentUser.email]);

    return (
        <>
            <S.commentCountWrapper>
                <span>댓글</span>
                <span>{commentLength}</span>
            </S.commentCountWrapper>
            <S.commentInputContainer>
                <S.commentThumbnailWrapper>
                    <img src={todayProfileImg} alt="profile-img" />
                </S.commentThumbnailWrapper>
                <S.commentInputWrapper>
                    <S.commentInput type='text' placeholder='다른사람과 소통해볼까요?' 
                        value={value}
                        onChange={onChangeValue}
                    />
                    <S.commentForwardButton onClick={createComment}><FontAwesomeIcon icon={faPaperPlane} className='paperPlane' /></S.commentForwardButton>
                </S.commentInputWrapper>
            </S.commentInputContainer>
        </>
    );
};

export default CommentInsert;