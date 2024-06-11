import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons"
import Button from "../../components/button/style";
import { Link} from "react-router-dom";

import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

const MyMindHome = () => {
    return (
        <>
            <S.ImageWrapper>
                 
                <S.TitleWrapper>
                    <p id='firstPage'>나의 마음보기</p>
                </S.TitleWrapper>
                
                <S.text01>나의 마음과 대화하면서 편안해지길 바라요
                    <FontAwesomeIcon icon={faHeartCircleCheck} className="faHeartCircleCheck" />
                </S.text01>
                
                <S.GoToWriteButtonWrapper>
                    <Link to='/myMind/inMyMind01'>
                        <Button id='goToWrite' size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>마음일지 적으러 가기</Button>
                    </Link>
                </S.GoToWriteButtonWrapper>
                
            </S.ImageWrapper>
        </>
    );
};

export default MyMindHome;