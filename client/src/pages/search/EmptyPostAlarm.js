import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './style';

const EmptyPostAlarm = () => {
    return (
        <S.searchEmptyContainer>
            <S.searchEmptyIconWrapper>
            <img src={`${process.env.PUBLIC_URL}/global/images/heartCrack.png`} alt="heartCrack" />
            </S.searchEmptyIconWrapper>
            <S.searchEmptyTextWrapper>
                <S.searchEmptyText>
                    작성한 ‘키워드’에 해당하는 글이 존재하지 않습니다.<br/> 
                    키워드로 작성한 나의 오늘을 
                    다른 사람과 공유해보는 것은 어떨까요?
                </S.searchEmptyText>
            </S.searchEmptyTextWrapper>
        </S.searchEmptyContainer>
    );
};

export default EmptyPostAlarm;