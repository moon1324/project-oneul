import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faUserPen} from '@fortawesome/free-solid-svg-icons'
import S from './style';

const MyPageMain = () => {
    return (
        <>
            <S.MypageNav>
                <Link to={'/myPage/edit'}>
                    <FontAwesomeIcon icon={faUserPen} /> 
                </Link>
            </S.MypageNav>
            <S.ProfileContaier>
                <S.ProfilePictureWrapper>
                    <div className="pictureBox">
                        <img src={process.env.PUBLIC_URL + '/images/mypage/profile_picture.svg'}/>
                    </div>
                </S.ProfilePictureWrapper>
                <S.ProfileNameWrapper>
                    <h3>마보님</h3>
                </S.ProfileNameWrapper>
                <S.ProfileStatusWrapper>
                    <p>안녕하세요! 저는 발랄한 마보예요!</p>
                </S.ProfileStatusWrapper>
                <S.ProfileContentsWrapper>
                    <div className="totalMyminBox">
                        <p>누적된 나의 마음</p>
                        <h3>10일</h3>
                    </div>
                    <div className="border">
                        <div></div>
                    </div>
                    <div className="sharedMytodayBox">
                        <p>공유된 나의 마음</p>
                        <Link to={'/myMind'}>
                            <h3>1개</h3>
                        </Link>
                    </div>
                </S.ProfileContentsWrapper>   
            </S.ProfileContaier>
            <S.ServiceContainer>
                <S.ServiceWrapper>
                    <Link to={'/myPage/termsOfUse'}>
                        <p>서비스 이용약관</p>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </S.ServiceWrapper>
                <S.ServiceWrapper>
                    <Link to={'/myPage/privacyPolicy'}>
                        <p>개인정보처리방침</p>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </S.ServiceWrapper>
                <S.ServiceWrapper>
                    <Link to={'/logIn'}>
                        <p>로그아웃</p>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </S.ServiceWrapper>
                <S.ServiceWrapper>
                    <Link to={'/myPage/secession'}>
                        <p className="secession">회원탈퇴</p>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </S.ServiceWrapper>
            </S.ServiceContainer>

        </>
    );
};

export default MyPageMain;