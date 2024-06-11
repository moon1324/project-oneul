import React from 'react';
import S from './style';

const Banner5 = () => {
    return (
            <S.BannerContainer>
                <S.BannerWrapper>
                    <S.BannerImageBox>
                        <img src={process.env.PUBLIC_URL+"/images/banner/banner5.svg"} alt="" srcset="" />
                    </S.BannerImageBox>
                    <S.BannerConBox>
                        <h2>무엇이 오늘을 행복하게 하나요?</h2>
                        <p> ex. 무엇이 '오늘'을 행복하게 해?
                        </p>
                    </S.BannerConBox>
                </S.BannerWrapper>
            </S.BannerContainer>
    );
};

export default Banner5;