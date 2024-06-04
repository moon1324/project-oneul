import React from 'react';
import S from './style';

const Banner1 = () => {
    return (
        <S.BannerContainer>
            <S.BannerWrapper>
                <S.BannerImageBox>
                    <img src={process.env.PUBLIC_URL+"/images/banner/banner1.svg"} alt="" srcset="" />
                </S.BannerImageBox>
                <S.BannerConBox>
                    <h2>마음이란 무엇인가?</h2>
                    <p>마음의 해법으로부터 진정한 삶의 가치와 행복이 시작된다는 것을 </p>
                    <p>모든 사람들은 본능적으로 알고 있어요. </p>
                    <p>21세기로 들어서면서 나타난 인간성 상실, 정신적 황폐화와 </p>
                    <p>그로 인한 사회적 혼란을 경험하면서 </p>
                    <p>물질이 아닌 정신에 더 가치를 두고 내면의 안정과 </p>
                    <p>평화를 찾고자 하는 사람들이 늘어가고 있어요.</p>
                    <p>나의 마음을 들여다보는 것은</p> 
                    <p>행복을 위한 필수불가결의 조건이에요.</p>
                    <p>'오늘'을 통해 하루동안 나의 마음을 성찰해보고</p>
                    <p>행복을 위한 초석을 쌓아보세요!</p>
                </S.BannerConBox>
            </S.BannerWrapper>
        </S.BannerContainer>
    );
};

export default Banner1;