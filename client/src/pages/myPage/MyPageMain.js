import React, { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faUserPen} from '@fortawesome/free-solid-svg-icons'
import S from './style';
import {useDispatch, useSelector} from 'react-redux'
import { setUserLogout } from '../../modules/logIn';

const MyPageMain = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const isLogin = useSelector((state) => state.login.isLogin);
    const currentUser = useSelector((state)=>state.login.currentUser);
    
    const [nickname, setNickname] = useState();
    const [statusMessage, setStatusMessage] = useState();
    const [profileImg, setProfileImg] = useState("");

    const logoutApi = async () => {
        try {
            const response = await fetch("http://localhost:8000/user/logout", {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('로그아웃 실패');
            }
    
            clearSession(); 
            console.log('로그아웃 성공');
            // 세션 관련 정보를 클리어하는 함수 호출
        } catch (error) {
            console.error('로그아웃 오류:', error);
        }
    };

    useEffect(() => {
        const fetchUserProfileImage = async () => {
            if (currentUser && currentUser.email) {
                try {
                    const response = await fetch(`http://localhost:8000/user/getProfile/${currentUser.email}`);
                    const data = await response.json();
                    setProfileImg(data.profileImg);
                } catch (error) {
                    console.error("Failed to fetch user profile image", error);
                }
            }
        };
        fetchUserProfileImage();
        setNickname(currentUser.nickname);
        setStatusMessage(currentUser.statusMessage);
    }, [currentUser]);


    const clearSession = () => {
        // 쿠키 클리어
        document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // 기타 로컬 스토리지 등의 클리어 로직 추가 가능
    };

    const handleLogout = async () => {
        try {
            await logoutApi();
            dispatch(setUserLogout(null, false));
            navigate("/logIn"); // 로그인 페이지로 리디렉션
        } catch (error) {
            console.error('Failed to handle logout:', error.message);
        }
    };


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
                        <img src={profileImg} style={{width:100}}/>
                    </div>
                </S.ProfilePictureWrapper>
                <S.ProfileNameWrapper>
                    <h3>{nickname}</h3>
                </S.ProfileNameWrapper>
                <S.ProfileStatusWrapper>
                    <p>{statusMessage}</p>
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
                    <button onClick={handleLogout}>
                        <p>로그아웃</p>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
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