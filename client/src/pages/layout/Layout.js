import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeartCircleCheck,
    faCalendarDays,
    faHouse,
    faUsers,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
const Layout = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.Main>
                    <Outlet />
                </S.Main>
                <S.Nav>
                    <NavLink to={"/myMind"}>
                        <S.NavWrap>
                            <FontAwesomeIcon
                                icon={faHeartCircleCheck}
                                className="icon"
                            />
                            <p>나의 마음보기</p>
                        </S.NavWrap>
                    </NavLink>
                    <NavLink to={"/calendar"}>
                        <S.NavWrap>
                            <FontAwesomeIcon
                                icon={faCalendarDays}
                                className="icon"
                            />
                            <p>캘린더</p>
                        </S.NavWrap>
                    </NavLink>
                    <NavLink to={"/"}>
                        <S.NavWrap>
                            <FontAwesomeIcon icon={faHouse} className="icon" />
                            <p>홈</p>
                        </S.NavWrap>
                    </NavLink>
                    <NavLink to={"/ourToday"}>
                        <S.NavWrap>
                            <FontAwesomeIcon icon={faUsers} className="icon" />
                            <p>우리의 오늘</p>
                        </S.NavWrap>
                    </NavLink>
                    <NavLink to={"/myPage"}>
                        <S.NavWrap>
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            <p>마이페이지</p>
                        </S.NavWrap>
                    </NavLink>
                </S.Nav>
            </S.Wrapper>
        </S.Background>
    );
};

export default Layout;
