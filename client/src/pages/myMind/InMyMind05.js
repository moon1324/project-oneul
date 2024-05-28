import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link} from "react-router-dom";
import TitleStep from "./TitleStep";

const InMyMind05 = () => {
    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>마크(이)는 자신에게 어떤 말을 해주고 싶어?</p>
                </S.QuestionWrapper>
 
                 <form action="" method="post">
                     <S.TextAreaWrapper >
                         <textarea placeholder="나에게도 말을 걸어봐!"></textarea>
                     </S.TextAreaWrapper>
                 </form>
                 
                 <S.NextButtonWrapper>
                     <Link to={'/myMind/InMyMind06'}><Button size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>다음</Button></Link>
                 </S.NextButtonWrapper>
            
             </S.Wrapper>
            
        </>
    
    )
};

export default InMyMind05;