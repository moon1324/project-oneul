import React, { useEffect, useState } from 'react';
import S from './style';
import Comment from './Comment';
import DeleteModal from './DeleteModal';

// 변수로 {comment, getComments, setComments, isCommentUpdate, setIsCommentUpdate}을 받을 것
const CommentContainer = ({post, showWindow, setOurTodayCommentUpdate, 
    ourTodayCommentUpdate, getCommentLength,
    isDeleteOk, setIsDeleteOk,
    deleteModalStatus, setDeleteModalStatus,
}) => {
    const [ comments, setComments ] = useState();
    const postId = post._id
        
    // ${postId}
    useEffect(()=>{ 
        const getComment = async () => {
            const response = await fetch(`http://localhost:8000/ourToday/checkPostComment`);
            const dayComments = await response.json();
            return dayComments
        }
        getComment().then((dayComments)=>{
            setComments(dayComments);
            return getCommentLength(dayComments.length);
        });
    }, [showWindow, ourTodayCommentUpdate])
   
    return (
        <>
            <S.commentUnorderedList>
                    {comments && comments.map((replyComment, i) => 
                        <Comment key={i} replyComment={replyComment} 
                            showWindow={showWindow} setOurTodayCommentUpdate={setOurTodayCommentUpdate} 
                            ourTodayCommentUpdate={ourTodayCommentUpdate}
                            isDeleteOk={isDeleteOk}
                            setIsDeleteOk={setIsDeleteOk}
                            deleteModalStatus={deleteModalStatus} 
                            setDeleteModalStatus={setDeleteModalStatus}
                        />
                    )}
                <S.gap></S.gap>
            </S.commentUnorderedList>
            <DeleteModal 
                isDeleteOk={isDeleteOk}
                setIsDeleteOk={setIsDeleteOk}
                deleteModalStatus={deleteModalStatus} 
                setDeleteModalStatus={setDeleteModalStatus}
                ourTodayCommentUpdate={ourTodayCommentUpdate}
                setOurTodayCommentUpdate={setOurTodayCommentUpdate}
            />
        </>
    );
};

export default CommentContainer;