import React, { useState } from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const BackgroundImage=styled.div`
    background-image:url(../../../public/global/images/background.png) ;
    background-image: url('./background.png');
    /* background-repeat: no-repeat; */
    /* background-position: top center; */
    /* background-size: cover; */
    /* background-attachment:fixed; */
    
`
const MyMind = () => {

    
    
    return (
        <>
        {/* <S.Background> */}
        <S.ImageWrapper>
            {/* <S.Wrapper> */}
                 <S.TitleWrapper>
                    <p>나의 마음보기</p>
                </S.TitleWrapper>
                
                <S.p_text>오늘의 마음일지를 적어볼까요?</S.p_text>
            
                <S.GoToWriteButtonWrapper>
                    <Link to='/myMind/inMyMind01'>
                        <Button id='goToWrite' size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>마음일지 적으러가기</Button>
                    </Link>
                </S.GoToWriteButtonWrapper>
            {/* </S.Wrapper> */}
            
            </S.ImageWrapper>
            {/* </S.Background> */}
        </>
    );
};

export default MyMind;

