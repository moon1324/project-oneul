import React, { useEffect, useState } from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';

const Comment = ({replyComment, showWindow, setOurTodayCommentUpdate, 
    ourTodayCommentUpdate,
    isDeleteOk, setIsDeleteOk,
    deleteModalStatus, setDeleteModalStatus,
}) => {
    const [todayCommentProfileImg, setTodayCommentProfileImg] = useState("");
    const [isCommentEdit, setIsCommentEdit] = useState(false);
    const [commentValue, setCommentValue, handleCommentChange] = useInput();
    const currentUser = useSelector((state)=>state.login.currentUser);
    const date = replyComment.createdAt.split("T05")
    const commentId = replyComment._id;

    const handleOpenCommentEdit = (replyComment) => {
        setIsCommentEdit(!isCommentEdit)
        setCommentValue(replyComment.commentText)
    }

    const handleCommentEdit = () => {
        setIsCommentEdit(!isCommentEdit)
    }

    const handleOpenDeleteModal = () => {
        return setDeleteModalStatus(!deleteModalStatus)
    }

    useEffect(() => {
        const fetchUserProfileImage = async () => {
            try {
                    const response = await fetch(`http://localhost:8000/user/getProfile/${replyComment.commentUser}`);
                    const data = await response.json();
                    setTodayCommentProfileImg(data.profileImg);
                } catch (error) {
                    console.error("Failed to fetch user profile image", error);
                }
        };
        fetchUserProfileImage();
    }, [showWindow]);

    const handleUpdateComment = async () => {
        console.log(commentValue)
        try {
            const response = await fetch(`http://localhost:8000/ourToday/updateComment`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ... replyComment,
                    id: replyComment._id,
                    commentText: commentValue,
                }),
            });
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayCommentUpdate(!ourTodayCommentUpdate);
                setIsCommentEdit(false);
            } else {
                console.error('Failed to update post');
            }
        } catch (error) {
            console.error('An error occurred while updating the post:', error);
        }
    }

    useEffect(() => {
        const handleDeleteComment = async () => {
            console.log(commentId)
            try {
                const response = await fetch(`http://localhost:8000/ourToday/deleteComment`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id: commentId
                    }),
                });
                if (response.ok) {
                    setDeleteModalStatus(!deleteModalStatus);
                    setOurTodayCommentUpdate(!ourTodayCommentUpdate);
                    console.log("정상적으로 삭제가 완료되었습니다.");
                } else {
                    console.error('Failed to delete post');
                }
            } catch (error) {
                console.error('An error occurred while deleting the post:', error);
            }
        };
        if (isDeleteOk) {
            handleDeleteComment().then(()=>{
                setDeleteModalStatus(!deleteModalStatus);
                setOurTodayCommentUpdate(!ourTodayCommentUpdate);
                setIsDeleteOk(false);
            });
        }
    }, [isDeleteOk, deleteModalStatus, ourTodayCommentUpdate]);

    return (
        <li>
                    <S.commentUserInfoWrapper>
                        <S.commentThumbnailWrapper>
                            <img src={todayCommentProfileImg} alt="profile-img" />
                        </S.commentThumbnailWrapper>
                        <S.commentNameAndDate>
                            <S.commentUserName>{replyComment.commentUserNickName}</S.commentUserName>
                            <S.commentDate>{date[0]}</S.commentDate>
                        </S.commentNameAndDate>
                            {currentUser.email === replyComment.commentUser ? (
                                <S.correctionButtonContainer>
                                    {!isCommentEdit ? (
                                    <>
                                        <S.correctionButtonWrapper>
                                            <S.correctionButton onClick={()=>handleOpenCommentEdit(replyComment)}><FontAwesomeIcon icon={faPenToSquare} className='pen' /></S.correctionButton>
                                        </S.correctionButtonWrapper>
                                        <S.correctionButtonWrapper>
                                            <S.correctionButton onClick={handleOpenDeleteModal}><FontAwesomeIcon icon={faTrashCan} className='trash' /></S.correctionButton>
                                        </S.correctionButtonWrapper>
                                    </>) : (
                                    <>
                                        <S.correctionButtonWrapper>
                                            <S.correctionButton onClick={handleUpdateComment}><FontAwesomeIcon icon={faCheck} className='check'/></S.correctionButton>
                                        </S.correctionButtonWrapper>
                                        <S.correctionButtonWrapper>
                                            <S.correctionButton onClick={handleCommentEdit}><FontAwesomeIcon icon={faX} className='exit'/></S.correctionButton>
                                        </S.correctionButtonWrapper>
                                    </>)}
                                </S.correctionButtonContainer>
                            ):(<></>)}
                    </S.commentUserInfoWrapper>
                    {isCommentEdit ? (
                    <S.comment type="text" className='comment' 
                        value={commentValue}
                        onChange={handleCommentChange}   
                    />):(
                        <S.commentWrapper>
                            {replyComment.commentText}
                        </S.commentWrapper>
                    )}
        </li>
    );
};

export default Comment;