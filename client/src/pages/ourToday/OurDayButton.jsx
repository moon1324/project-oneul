import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './style';

const OurDayButton = () => {
    return (
        <S.contentButtonWrapper>
                <S.dayButtonWrapper>
                    <S.ourDayButtonWrapper>
                        <span>우리의 오늘</span>
                    </S.ourDayButtonWrapper>
                    <S.myDayButtonWrapper>
                        <span>나의 오늘</span>
                    </S.myDayButtonWrapper>
                </S.dayButtonWrapper>
                <S.writingButtonWrapper>
                    <S.writingButton>
                        나의 오늘 쓰기
                    </S.writingButton>
                </S.writingButtonWrapper>
        </S.contentButtonWrapper>
    );
};

export default OurDayButton;