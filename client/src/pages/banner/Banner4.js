import React from 'react';
import S from './style'

const Banner4 = () => {
    return (
        <S.BannerContainer>
            <S.BannerWrapper>
                <S.BannerImageBox>
                    <img src={process.env.PUBLIC_URL+"/images/banner/banner4.svg"} alt="" srcset="" />
                </S.BannerImageBox>
                <S.BannerConBox>
                    <h2>오늘을 통해 무엇을 이루고 싶나요?</h2>
                    <p> ex. Q. '오늘'을 통해 무엇을 이루고 싶나요?
                    </p>
                    <p>A. 나의 마음을 되돌아보고 안정을 느끼고 싶어요.</p>
                </S.BannerConBox>
            </S.BannerWrapper>
        </S.BannerContainer>
    );
};

export default Banner4;