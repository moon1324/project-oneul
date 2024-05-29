import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link} from "react-router-dom";
import TitleStep from "./TitleStep";

const InMyMind03 = () => {
    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                 <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>그럼 마크(이)는 그 상황에서 무엇을 바랐어?</p>
                 </S.QuestionWrapper>
 
                 <form action="" method="post">
                     <S.TextAreaWrapper >
                         <textarea placeholder="네가 편안해지길 바래"></textarea>
                     </S.TextAreaWrapper>
                 </form>
                 
                 <S.NextButtonWrapper>
                     <Link to={'/myMind/inMyMind04'}><Button size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>다음</Button></Link>
                 </S.NextButtonWrapper>
            
             </S.Wrapper>
            
        </>
    
    )
};

export default InMyMind03;