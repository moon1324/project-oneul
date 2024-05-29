import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link} from "react-router-dom";
import TitleStep from "./TitleStep";
import {useForm} from 'react-hook-form'

const InMyMind02 = () => {
    const {register, handleSubmit,
        formState:{isSubmitting,errors}}
        =useForm({mode:'onChange'})

    
    return (
        <>
         <S.Wrapper>
                
            <TitleStep/>
                 
                <S.QuestionWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <p>어떤 상황때문에 이 감정들을 느꼈어?</p>
                </S.QuestionWrapper>

                 
                <S.TextAreaWrapper htmlFor="question01" >
                    <textarea placeholder="감정을 느낀 구체적인 상황을 말해줄래?"></textarea>
                </S.TextAreaWrapper>
                
                 {/* <form action="" method="post">
                     <S.TextAreaWrapper >
                         <textarea placeholder="앞에서 말했던 감정들을 구체적인 상황에 넣어서 표현해봐!"></textarea>
                     </S.TextAreaWrapper>
                 </form> */}
                 
                <S.NextButtonWrapper>
                     <Link to={'/myMind/inMyMind03'}><Button size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>다음</Button></Link>
                </S.NextButtonWrapper>
            
             </S.Wrapper>
            
            
        </>
    
    )
};

export default InMyMind02;
