import React, { useState } from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons"
import Button from "../../components/button/style";
import { Link, Outlet} from "react-router-dom";
import styled from "styled-components";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

const MyMind = () => {

    return (
        <>
        
        <S.ImageWrapper>
            {/* <S.Wrapper> */}
                 <S.TitleWrapper>
                    <p>나의 마음보기</p>
                </S.TitleWrapper>
                
                <S.text01>오늘 하루는 어떠셨나요?
                    <FontAwesomeIcon icon={faHeartCircleCheck} className="faHeartCircleCheck" />
                </S.text01>
                <S.GoToWriteButtonWrapper>
                    <Link to='/myMind/inMyMind01'>
                        <Button id='goToWrite' size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>마음일지 적으러가기</Button>
                    </Link>
                </S.GoToWriteButtonWrapper>
            {/* </S.Wrapper> */}
            
            </S.ImageWrapper>
            
        </>
    );
};

export default MyMind;

