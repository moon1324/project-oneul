import React, { useEffect, useState } from 'react';
import { faFaceAngry as regularAngry, faFaceSadTear as regularSadTear, faFaceSmile as regularSmile, faHeart as regularHeart, faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry as solidAngry, faFaceSadTear as solidSadTear, faFaceSmile as solidSmile, faHeart as solidHeart, faMessage, faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';
import CommentInsert from './CommentInsert';
import { useSelector } from 'react-redux';
import CommentContainer from './CommentContainer';

// {comments, isCommentUpdate, setIsCommentUpdate}
const Reaction = ({post, setOurTodayUpdate, ourTodayUpdate, 
    isDeleteOk, setIsDeleteOk,
    deleteModalStatus, setDeleteModalStatus, }) => {
    const postId = post._id;
    const currentUser = useSelector((state) => state.login.currentUser);
    const [ourTodayCommentUpdate, setOurTodayCommentUpdate] = useState(false);
    
    // 댓글 버튼 클릭시 창을 보이게 하기 위한 상태변화 준비
    const [showWindow, setShowWindow] = useState(false);
    // 지금 요소를 드래그하고 있는지에 대한 상태관리
    const [isDragging, setIsDragging] = useState(false);
    const [commentLength, setCommentLength] = useState();
    // isDragging을 반대로 바꿔주어 드래그가 가능해지도록 설정
    const onDragStart = (e) => {
        setIsDragging(!isDragging);
        setOurTodayCommentUpdate(!ourTodayCommentUpdate)
    }
    // showWindow의 값을 반대로 바꾸어 상태를 변화시킴
    // (궁극적으로 창을 보이게 하거나 안보이게 이벤트를 걸어줄 예정)
    const activateCommentWindow = () => {
        setShowWindow(!showWindow);
    }

    const getCommentLength = (length) => {
        return setCommentLength(length);
    }


//     // 💡PanInfo 객체란?
// 다음 값들에 대한 x, y값을 가진 객체를 의미합니다.

// point: 디바이스나 페이지에 대한 좌표값
// delta: 마지막 이벤트로부터 멀어진 거리(움직인 거리)
// offset: 기존 팬 이벤트로부터의 오프셋
// velocity: 포인터의 현재 속도

// threshold
// 디폴트로, 제스처 핸들러는 이벤트가 발생하면 바로 유발되지만, 사용자 액션이 의도적임을 확실하게 해야 할 때가 있다. 그럴 때, threshold를 쓰면 된다.
// threshold는 핸들러가 실행되기 전에 제스처 움직임이 이동해야 하는 최소 변위이다.

// 예제
// threshold를 100으로 설정하고 증가될 때마다 보이도록 했다.
// 사각형을 드래그하면, 사각형이 축을 따라 이동할 때까지, 몇 픽셀이 남았는지를 보여주는 ghost 사각형을 보여줄 수 있다.




    const handleUpdateHeartReaction = async() => {
        console.log(post.heart)
        if(post.heart.includes(currentUser.email)){
            const response = await fetch(`http://localhost:8000/ourToday/minusPostHeartReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }else{
            const response = await fetch(`http://localhost:8000/ourToday/plusPostHeartReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }
    }
        
    const handleUpdateLikeReaction = async() => {
        if(post.like.includes(currentUser.email)){
            const response = await fetch(`http://localhost:8000/ourToday/minusPostLikeReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }else{
            const response = await fetch(`http://localhost:8000/ourToday/plusPostLikeReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }
    }    

    const handleUpdateSmileReaction = async() => {
        if(post.smile.includes(currentUser.email)){
            const response = await fetch(`http://localhost:8000/ourToday/minusPostSmileReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }else{
            const response = await fetch(`http://localhost:8000/ourToday/plusPostSmileReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }
    }

    const handleUpdateSadReaction = async() => {
        if(post.sad.includes(currentUser.email)){
            const response = await fetch(`http://localhost:8000/ourToday/minusPostSadReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }else{
            const response = await fetch(`http://localhost:8000/ourToday/plusPostSadReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }
    }

    const handleUpdateAngryReaction = async() => {
        if(post.angry.includes(currentUser.email)){
            const response = await fetch(`http://localhost:8000/ourToday/minusPostAngryReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }else{
            const response = await fetch(`http://localhost:8000/ourToday/plusPostAngryReaction`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    userEmail: currentUser.email,
                })
            })
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
            } else {
                console.error('Failed to update post');
            }
        }
    }

    // 댓글 관련 이벤트 처리
    // const [ comments, setComments ] = useState([])
    // const [ error, setError ] = useState(false);
    // const [ isCommentUpdate, setIsCommentUpdate ] = useState(false);

    // const getComments = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/ourToday');
    //         const datas = await response.json()
    //         return datas
    //     } catch (error) {
    //         setError(error)
    //     }
    // }    

    // useEffect(() => {
    //     getComments().then(setComments)
    // }, [isCommentUpdate])

    // console.log(comments && comments.length)


    return (
        <S.reactionWrapper>
            <S.commentIconContainer>
                <S.commentIconWrapper onClick={activateCommentWindow}>
                    <FontAwesomeIcon icon = {faMessage} className='comment'/>
                    <S.commentCount>{commentLength}</S.commentCount>
                </S.commentIconWrapper>
            </S.commentIconContainer>
            <S.emotionContainer>
                <S.emotionWrapper>
                    <label>
                      <S.emotionList onClick={handleUpdateHeartReaction}><FontAwesomeIcon icon = {post.heart.includes(currentUser.email) ? solidHeart : regularHeart} className='heart'/><S.reactionCountWrapper>{post.heart.length}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleUpdateLikeReaction}><FontAwesomeIcon icon = {post.like.includes(currentUser.email) ? solidThumbsUp : regularThumbsUp} className='thumbsUp'/><S.reactionCountWrapper>{post.like.length}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleUpdateSmileReaction}><FontAwesomeIcon icon = {post.smile.includes(currentUser.email) ? solidSmile : regularSmile} className='smile'/><S.reactionCountWrapper>{post.smile.length}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleUpdateSadReaction}><FontAwesomeIcon icon = {post.sad.includes(currentUser.email) ? solidSadTear : regularSadTear} className='sad'/><S.reactionCountWrapper>{post.sad.length}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleUpdateAngryReaction}><FontAwesomeIcon icon = {post.angry.includes(currentUser.email) ? solidAngry : regularAngry} className='angry'/><S.reactionCountWrapper>{post.angry.length}</S.reactionCountWrapper></S.emotionList>
                    </label>
                </S.emotionWrapper>
            </S.emotionContainer>
            {/* handleWindowY()함수를 반환함으로써 함수의 실행결과가 S.commentWindow의 props로 반환된다.
                onMouseDown은 마우스를 누를때 이벤트를 설정해주는 것으로 onDragStart 함수를 실행해주어 drag가 가능해지도록 설정 */}
            { showWindow && <S.commentWindow drag="y" onMouseDown={onDragStart} 
                                dragConstraints={{top: 0, bottom: 0}} 
                                animate={{ y: -45 }}
                                exit={{ y: 45 }}
                                transition={{
                                    type: 'spring',
                                }}
                                onDragEnd={(info) => {
                                // y가 음수이면 위로, 양수이면 아래로

                                const offsetThreshold = 30;

                                const isOverOffsetThreshold = Math.abs(info.offsetY) > offsetThreshold;

                                if (!isOverOffsetThreshold) return;

                                activateCommentWindow();
                                }}>
                {/* CommentInsert(댓글 입력창)에 comments={comments}
                    setIsCommentUpdate={setIsCommentUpdate}
                    isCommentUpdate={isCommentUpdate} 전달할 것 */}
                <CommentInsert post={post} showWindow={showWindow} setOurTodayCommentUpdate={setOurTodayCommentUpdate} ourTodayCommentUpdate={ourTodayCommentUpdate} getCommentLength={getCommentLength} commentLength={commentLength}/>
                <S.commentContainer>
                    <CommentContainer post={post} showWindow={showWindow} 
                        setOurTodayCommentUpdate={setOurTodayCommentUpdate} 
                        ourTodayCommentUpdate={ourTodayCommentUpdate} 
                        getCommentLength={getCommentLength}
                        isDeleteOk={isDeleteOk} setIsDeleteOk={setIsDeleteOk}
                        deleteModalStatus={deleteModalStatus} setDeleteModalStatus={setDeleteModalStatus}
                    />
                    {/* 각 comment가 추가 될때마다 댓글이 나타나도록 Comment 컴포넌트화 */}
                    {/* {comments.map((comment, i) => {
                        <Comment
                            key={i}
                            comment={comment}
                            getComments={getComments}
                            setIsCommentUpdate={setIsCommentUpdate}
                            isCommentUpdate={isCommentUpdate}
                        />
                    })} */}
                </S.commentContainer> 
            </S.commentWindow> }
        </S.reactionWrapper> 
    );
};

export default Reaction;