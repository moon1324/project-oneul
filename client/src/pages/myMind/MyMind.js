import React, { useState } from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link, Outlet} from "react-router-dom";
import MyMindHome from "./MyMindHome";



const MyMind = () => {

    
    return (
        <>
            <S.Wrapper>
                <S.TitleWrapper>
                    <p>나의 마음보기</p>
                </S.TitleWrapper>
                
                <S.p_text>오늘의 마음일지를 적어볼까요?</S.p_text>

                <Link to='/myMind/inMyMind01'>
                    <Button size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>마음일지 적으러가기</Button>
                </Link>
           </S.Wrapper>
        </>
    );
};

export default MyMind;