import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link} from "react-router-dom";
import TitleStep from "./TitleStep";

const InMyMind04 = () => {
    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>그랬구나..! 마크(이)는 어떤 말이 듣고 싶어?</p>
                </S.QuestionWrapper>
 
                 <form action="" method="post">
                     <S.TextAreaWrapper >
                         <textarea placeholder="다른 사람에게 듣고 싶은 말을 적어봐!"></textarea>
                     </S.TextAreaWrapper>
                 </form>
                 
                 <S.NextButtonWrapper>
                     <Link to={'/myMind/InMyMind05'}><Button size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>다음</Button></Link>
                 </S.NextButtonWrapper>
            
             </S.Wrapper>
            
        </>
    
    )
};

export default InMyMind04;