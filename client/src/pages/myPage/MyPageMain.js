import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faUserPen} from '@fortawesome/free-solid-svg-icons'
import S from './style';
import {useDispatch, useSelector} from 'react-redux'

const MyPageMain = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state)=>state.login.currentUser);

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
                        <img src={currentUser.profileImg}/>
                    </div>
                </S.ProfilePictureWrapper>
                <S.ProfileNameWrapper>
                    <h3>{currentUser.nickname}</h3>
                </S.ProfileNameWrapper>
                <S.ProfileStatusWrapper>
                    <p>{currentUser.statusMessage}</p>
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