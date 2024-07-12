import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import Comment from './Comment';
import DeleteModal from './DeleteModal';

// 변수로 {comment, getComments, setComments, isCommentUpdate, setIsCommentUpdate}을 받을 것
const CommentContainer = ({post, showWindow, setOurTodayCommentUpdate, 
    ourTodayCommentUpdate, getCommentLength,
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
   
    const commentModalBackground = useRef();
    const [commentModalStatus, setCommentModalStatus] = useState(false)
    const [isCommentDeleteOk, setIsCommentDeleteOk] = useState(false)

    const handleCloseCommentModal = () => {
       return setCommentModalStatus(!commentModalStatus)
    }

    const handleCommentBackgroundModal = (e) => {
        if(e.target === commentModalBackground.current) {
            setCommentModalStatus(!commentModalStatus)
        }
    }

    const handleCommentDeleteOk = () => {
        // 모달을 끈다.
        setCommentModalStatus(!commentModalStatus);
        // delete쿼리
        setIsCommentDeleteOk(!isCommentDeleteOk);
        return;
    }


    return (
        <>
            <S.commentUnorderedList>
                    {comments && comments.map((replyComment, i) => 
                        <Comment key={i} replyComment={replyComment} 
                            showWindow={showWindow} setOurTodayCommentUpdate={setOurTodayCommentUpdate} 
                            ourTodayCommentUpdate={ourTodayCommentUpdate}
                            isCommentDeleteOk={isCommentDeleteOk}
                            setIsCommentDeleteOk={setIsCommentDeleteOk}
                            commentModalStatus={commentModalStatus} 
                            setCommentModalStatus={setCommentModalStatus}
                        />
                    )}
                <S.gap></S.gap>
            </S.commentUnorderedList>
            {
                commentModalStatus && 
                <S.modalContainer ref={commentModalBackground} onClick={handleCommentBackgroundModal}>
                    <S.modalWrapper>
                        <S.modalTitle>삭제</S.modalTitle>
                        <S.modalDescriptionWrapper>
                            <S.modalDescription>
                            내용을 정말로 삭제하시겠습니까?<br/>
                            삭제 시 복구할 수 없습니다.
                            </S.modalDescription>
                        </S.modalDescriptionWrapper>
                        <S.modalButtonContainer>
                            <S.modalButtonWrapper>
                                <S.modalCancelButton onClick={handleCloseCommentModal}>취소</S.modalCancelButton>
                            </S.modalButtonWrapper>
                            <S.modalButtonWrapper>
                                <S.modalDeleteButton onClick={handleCommentDeleteOk}>삭제</S.modalDeleteButton>
                            </S.modalButtonWrapper>
                        </S.modalButtonContainer>
                    </S.modalWrapper>
                </S.modalContainer>
            }
        </>
    );
};

export default CommentContainer;