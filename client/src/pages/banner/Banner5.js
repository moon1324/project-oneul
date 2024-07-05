import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const Banner5 = () => {
    return (
        <S.BannerContainer>
            <S.BannerWrapper id='banner5_wrapper'>
                <Link to={'/'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link>
                <S.BannerImageBox>
                    <img src={process.env.PUBLIC_URL+"/images/banner/banner5.svg"} />
                </S.BannerImageBox>
                <S.BannerConBox>
                    <div> 마음을 돌보고 행복해지게 해주는 또 다른 애플리케이션들을 추천해 드릴게요!</div>
                    <S.BigImageWrapper>
                        <div className='appTitle'>마보(mabo)</div>
                        <img src={process.env.PUBLIC_URL+"/images/banner/mabo_big.png"}/>
                        <div>마보는 기분, 상황, 대상 등 카테고리별로 다양한 명상 영상을 보고 마음을 차분하게 유지하게 시켜줘요. 명상과 관련한 다양한 클래스들을 수강할 수도 있고 내 마음을 기록하고 사람들과 나누는 명상 일기를 쓸 수도 있어요.<br/> 귀여운 캐릭터와 명상 영상들이 힐링을 주는 애플리케이션이에요.</div>
                    </S.BigImageWrapper>
                    
                    <S.BigImageWrapper>
                        <div className='appTitle'>무디(moodee)</div>
                        <img src={process.env.PUBLIC_URL+"/images/banner/moodee_big.png"}/>
                        <div>무디는 지금 내가 느끼는 감정을 입력하면 나에게 필요한 퀘스트들을 추천해 줘요.<br/> 그 퀘스트들을 완수하고 나면 현재 느끼고 있는 부정적인 감정들이 많이 가라앉게 돼요.<br/> 또한 기록한 감정에 대한 자세한 분석을 날짜별로 확인할 수 있고 귀여운 캐릭터 AI와 함께 대화를 나눌 수도 있어요.<br/> 별이 쏟아지는 것 같은 밤하늘 배경 테마가 아름다운 애플리케이션이에요.</div>
                        <br/>'오늘'과 함께 위 애플리케이션들을 사용해 보면 마음이 훨씬 안정되고 행복으로 나아갈 수 있을 거예요!
                    </S.BigImageWrapper>
                </S.BannerConBox>
            </S.BannerWrapper>
        </S.BannerContainer>
    );
};

export default Banner5;

{/* <S.SmallImageWrapper>
                    <br/><img src={process.env.PUBLIC_URL+"/images/banner/mabo_small.png"}/>
                    <div>마보</div>
                </S.SmallImageWrapper> */}