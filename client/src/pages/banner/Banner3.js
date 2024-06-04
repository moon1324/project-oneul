import React from 'react';
import S from './style'
const Banner3 = () => {
    return (
        <S.BannerContainer>
            <S.BannerWrapper>
                <S.BannerImageBox>
                    <img src={process.env.PUBLIC_URL+"/images/banner/banner3.svg"} alt="" srcset="" />
                </S.BannerImageBox>
                <S.BannerConBox>
                    <h2>어플 '오늘'이 궁금하신가요?</h2>
                    <p>
                        예시) 캘린더의 날짜를 클릭하면 그때 쓴 마음 일지를 볼 수 있는 것과 수정, 삭제 기능이 있다는 것을 설명,
                        게시판 활용 기능 등
                    </p>
                </S.BannerConBox>
            </S.BannerWrapper>
        </S.BannerContainer>
    );
};

export default Banner3;