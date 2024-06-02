import React, { useState } from 'react';
import { faFaceAngry as regularAngry, faFaceSadTear as regularSadTear, faFaceSmile as regularSmile, faHeart as regularHeart, faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry as solidAngry, faFaceSadTear as solidSadTear, faFaceSmile as solidSmile, faHeart as solidHeart, faMessage, faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';

const Reaction = () => {
    const [heartChange, setHeartChange] = useState(false);
    const [heartCount, setHeartCount] = useState(0);

    const [thumbsUpChange, setThumbsUpChange] = useState(false);
    const [thumbsUpCount, setThumbsUpCount] = useState(0);

    const [smileChange, setSmileChange] = useState(false);
    const [smileCount, setSmileCount] = useState(0);

    const [sadChange, setSadChange] = useState(false);
    const [sadCount, setSadCount] = useState(0);

    const [angryChange, setAngryChange] = useState(false);
    const [angryCount, setAngryCount] = useState(0);

    const [commentChange, setCommentChange] = useState(false);

    const handleHeart = () => {
        setHeartChange(!heartChange)
        if(heartChange){
           return setHeartCount(heartCount - 1);
        }else{
            return setHeartCount(heartCount + 1);
        }
    }

    const handleThumbsUp = () => {
        setThumbsUpChange(!thumbsUpChange)
        if(thumbsUpChange){
            return setThumbsUpCount(thumbsUpCount - 1);
        }else{
             return setThumbsUpCount(thumbsUpCount + 1);
        }
    }

    const handleSmile = () => {
        setSmileChange(!smileChange)
        if(smileChange){
            return setSmileCount(smileCount - 1);
        }else{
            return setSmileCount(smileCount + 1);
        }
    }

    const handleSad = () => {
        setSadChange(!sadChange)
        if(sadChange){
            return setSadCount(sadCount - 1);
         }else{
             return setSadCount(sadCount + 1);
         }
    }

    const handleAngry = () => {
        setAngryChange(!angryChange)
        if(angryChange){
            return setAngryCount(angryCount - 1);
         }else{
             return setAngryCount(angryCount + 1);
         }
    }

    const handleComment = () => {
        setCommentChange(!commentChange)
    }

    return (
        <S.reactionWrapper>
            <S.commentContainer>
                <S.commentWrapper>
                    <FontAwesomeIcon icon = {faMessage} className='comment'/>
                </S.commentWrapper>
            </S.commentContainer>
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
        </S.reactionWrapper>
    );
};

export default Reaction;