import React, { useState } from 'react';
import S from './style';
import useTextarea from '../../hooks/useTextarea';

const WriteToday = () => {
    const [postValue, setPostValue, handlePostChange] = useTextarea();

    return (
        <S.writeTodayContainer>
            <S.writeForm>
                <S.explanationWritingPostWrapper>
                    나의 오늘을 다른사람과 나눠볼까요?
                </S.explanationWritingPostWrapper>
                <S.textWrapper>
                    <S.todayText className='writeTodayText' 
                        value={postValue}
                        onChange={handlePostChange}    
                    />
                </S.textWrapper>
                <S.writeButtonWrapper>
                    <S.completeWriteButton>작성 완료</S.completeWriteButton>
                </S.writeButtonWrapper>
            </S.writeForm>
        </S.writeTodayContainer>
    );
};

export default WriteToday;