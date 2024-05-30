import React, { useState } from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import TitleStep from "./TitleStep";
import { Link } from "react-router-dom";


const InMyMind01 = () => {
    const [value, setValue] = useState("");
    const onChangeValue = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                 <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>오늘 마크(이)는 어떤 감정들을 느꼈어?</p>
                 </S.QuestionWrapper>
 
                 <form action="" method="post">
                     <S.TextAreaWrapper >
                         <textarea value={value} onChange={onChangeValue} placeholder="하루 동안 내가 느낀 감정을 되돌아보자~!"></textarea>
                     </S.TextAreaWrapper>
                 </form>
                 
                 <S.NextButtonWrapper>
                    <Link to={'/myMind/inMyMind02'}>
                        <Button value={value} onClick={onsubmit} size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>다음</Button>
                    </Link>
                 </S.NextButtonWrapper>
                 
            
             </S.Wrapper>
            
        </>
    
    )
};

export default InMyMind01;
