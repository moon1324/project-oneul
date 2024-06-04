import React, { useState } from 'react';
import { faFaceAngry as regularAngry, faFaceSadTear as regularSadTear, faFaceSmile as regularSmile, faHeart as regularHeart, faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry as solidAngry, faFaceSadTear as solidSadTear, faFaceSmile as solidSmile, faHeart as solidHeart, faMessage, faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';
import CommentInsert from './CommentInsert';
import Comment from './Comment';

const Reaction = ({comments, isCommentUpdate, setIsCommentUpdate}) => {
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

    const [showWindow, setShowWindow] = useState(false);
    
    function activateCommentWindow() {
        setShowWindow(!showWindow);
        console.log(showWindow)
    }


    
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
                      <S.emotionList onClick={handleHeart}><FontAwesomeIcon icon = {heartChange ? solidHeart : regularHeart} className='heart'/><reactionCountWrapper>{heartCount}</reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleThumbsUp}><FontAwesomeIcon icon = {thumbsUpChange ? solidThumbsUp : regularThumbsUp} className='thumbsUp'/><reactionCountWrapper>{thumbsUpCount}</reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleSmile}><FontAwesomeIcon icon = {smileChange ? solidSmile : regularSmile} className='smile'/><reactionCountWrapper>{smileCount}</reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleSad}><FontAwesomeIcon icon = {sadChange ? solidSadTear : regularSadTear} className='sad'/><reactionCountWrapper>{sadCount}</reactionCountWrapper></S.emotionList>
                    </label>
                    <label>
                        <S.emotionList onClick={handleAngry}><FontAwesomeIcon icon = {angryChange ? solidAngry : regularAngry} className='angry'/><reactionCountWrapper>{angryCount}</reactionCountWrapper></S.emotionList>
                    </label>
                </S.emotionWrapper>
            </S.emotionContainer>
            { showWindow && <S.commentWindow onClick={activateCommentWindow}>
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