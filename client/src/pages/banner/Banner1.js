import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Banner1 = () => {
    return (
        <S.BannerContainer>
            <S.BannerWrapper id="banner1_wrapper">
            <Link to={'/'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link>
                <S.BannerImageBox>
                    <img id="image01"src={process.env.PUBLIC_URL+"/images/banner/banner1.svg"} />
                </S.BannerImageBox>
                <S.BannerConBox>
                    <h3>마음이 건강해지려면 어떻게 해야 할까요?</h3>
                    <br/><p>마음의 해법으로부터 진정한 삶의 가치와 행복이 시작된다는 것을 모든 사람들은 본능적으로 알고 있어요.<br/> 21세기로 들어서면서 나타난 인간성 상실, 정신적 황폐화와 그로 인한 사회적 혼란을 경험하면서 물질이 아닌 정신에 더 가치를 두고 내면의 안정과 평화를 찾고자 하는 사람들이 늘어가고 있어요.<br/> 나의 마음을 들여다보는 것은 행복을 위한 필수불가결의 조건이에요.</p>
                    <br/><p>나의 마음에 대한 인지는 나를 파악하는 첫 번째 단계에요.<br/> 마음을 들여다보는 날이 늘어갈수록 나라는 사람을 더욱더 알게 될 거예요.<br/> 나의 마음을 인정하고 나와 소통하는 시간을 키워가면 마음이 건강한 사람이 될 수 있어요.</p>
                    <br/><p style={{fontWeight:'bold'}}>'오늘'을 통해 여러분 모두의 마음이 건강해지길 기원합니다!! </p>
                </S.BannerConBox>
            </S.BannerWrapper>
        </S.BannerContainer>
    );
};

export default Banner1;