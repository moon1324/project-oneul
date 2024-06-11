import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link} from "react-router-dom";
import TitleStep from "./TitleStep";
import {FormContext } from "./context/FormContext";
import { useContext, useState } from "react";

const InMyMind02 = ({index}) => {
    
    const {state, actions} = useContext(FormContext);
    const [value, setValue] = useState(state.formData[index]||"");
    
    const onChangeValue = (e) => {
        setValue(e.target.value);
    };
  
    const handleSave= (e) => {
        actions.updateFormData(index, value);
    };

    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                <S.QuestionWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <p>어떤 상황 때문에 이 감정들을 느꼈어?</p>
                </S.QuestionWrapper>

                 <S.TextAreaWrapper>
                    <textarea value={value} onChange={onChangeValue} placeholder="감정을 느낀 구체적인 상황을 말해줄래?"></textarea>
                </S.TextAreaWrapper>
                
                 <S.SaveButtonWrapper>
                     <Link to={'/myMind/inMyMind03'}><Button onClick={handleSave} size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>저장</Button></Link>
                </S.SaveButtonWrapper>
            
             </S.Wrapper>
        </>
    )
};

export default InMyMind02;
