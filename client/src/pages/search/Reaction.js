import React, { useState } from 'react';
import { faFaceAngry as regularAngry, faFaceSadTear as regularSadTear, faFaceSmile as regularSmile, faHeart as regularHeart, faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry as solidAngry, faFaceSadTear as solidSadTear, faFaceSmile as solidSmile, faHeart as solidHeart, faMessage, faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';
import CommentInsert from './CommentInsert';
import Comment from './Comment';

// {comments, isCommentUpdate, setIsCommentUpdate}
const Reaction = () => {
    // 하트 icon 클릭 및 하트 수 상태변화 관리
    const [heartChange, setHeartChange] = useState(false);
    const [heartCount, setHeartCount] = useState(0);
    // 좋아요 icon 클릭 및 좋아요 수 상태변화 관리
    const [thumbsUpChange, setThumbsUpChange] = useState(false);
    const [thumbsUpCount, setThumbsUpCount] = useState(0);
    // 즐거움 icon 클릭 및 즐거움 수 상태변화 관리
    const [smileChange, setSmileChange] = useState(false);
    const [smileCount, setSmileCount] = useState(0);
    // 슬픔 icon 클릭 및 슬픔 수 상태변화 관리
    const [sadChange, setSadChange] = useState(false);
    const [sadCount, setSadCount] = useState(0);
    // 화남 icon 클릭 및 화남 수 상태변화 관리
    const [angryChange, setAngryChange] = useState(false);
    const [angryCount, setAngryCount] = useState(0);
    // 댓글 버튼 클릭시 창을 보이게 하기 위한 상태변화 준비
    const [showWindow, setShowWindow] = useState(false);
    // 지금 요소를 드래그하고 있는지에 대한 상태관리
    const [isDragging, setIsDragging] = useState(false);
    // isDragging을 반대로 바꿔주어 드래그가 가능해지도록 설정
    const onDragStart = (e) => {
        setIsDragging(!isDragging);
    }
    // showWindow의 값을 반대로 바꾸어 상태를 변화시킴
    // (궁극적으로 창을 보이게 하거나 안보이게 이벤트를 걸어줄 예정)
    const activateCommentWindow = () => {
        setShowWindow(!showWindow);
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

    
    // 하트 클릭 이벤트 및 하트 수 변화 이벤트
    const handleHeart = () => {
        setHeartChange(!heartChange)
        if(heartChange){
           return setHeartCount(heartCount - 1);
        }else{
            return setHeartCount(heartCount + 1);
        }
    }
    // 좋아요 클릭 이벤트 및 좋아요 수 변화 이벤트
    const handleThumbsUp = () => {
        setThumbsUpChange(!thumbsUpChange)
        if(thumbsUpChange){
            return setThumbsUpCount(thumbsUpCount - 1);
        }else{
             return setThumbsUpCount(thumbsUpCount + 1);
        }
    }
    // 즐거움 클릭 이벤트 및 즐거움 수 변화 이벤트
    const handleSmile = () => {
        setSmileChange(!smileChange)
        if(smileChange){
            return setSmileCount(smileCount - 1);
        }else{
            return setSmileCount(smileCount + 1);
        }
    }
    // 슬픔 클릭 이벤트 및 슬픔 수 변화 이벤트
    const handleSad = () => {
        setSadChange(!sadChange)
        if(sadChange){
            return setSadCount(sadCount - 1);
         }else{
             return setSadCount(sadCount + 1);
         }
    }
    // 화남 클릭 이벤트 및 화남 수 변화 이벤트
    const handleAngry = () => {
        setAngryChange(!angryChange)
        if(angryChange){
            return setAngryCount(angryCount - 1);
         }else{
             return setAngryCount(angryCount + 1);
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
                </S.commentIconWrapper>
            </S.commentIconContainer>
            <S.emotionContainer>
                <S.emotionWrapper>
                    <label>
                      <S.emotionList onClick={handleHeart}><FontAwesomeIcon icon = {heartChange ? solidHeart : regularHeart} className='heart'/><S.reactionCountWrapper>{heartCount}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleThumbsUp}><FontAwesomeIcon icon = {thumbsUpChange ? solidThumbsUp : regularThumbsUp} className='thumbsUp'/><S.reactionCountWrapper>{thumbsUpCount}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleSmile}><FontAwesomeIcon icon = {smileChange ? solidSmile : regularSmile} className='smile'/><S.reactionCountWrapper>{smileCount}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleSad}><FontAwesomeIcon icon = {sadChange ? solidSadTear : regularSadTear} className='sad'/><S.reactionCountWrapper>{sadCount}</S.reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleAngry}><FontAwesomeIcon icon = {angryChange ? solidAngry : regularAngry} className='angry'/><S.reactionCountWrapper>{angryCount}</S.reactionCountWrapper></S.emotionList>
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
                <CommentInsert/>
                <S.commentUnorderedList>
                    <Comment/>
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
                </S.commentUnorderedList> 
            </S.commentWindow> }
        </S.reactionWrapper> 
    );
};

export default Reaction;