import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link} from "react-router-dom";
import TitleStep from "./TitleStep";
import {FormContext } from "./context/FormContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const InMyMind04 = ({index}) => {
    
    const currentUser = useSelector((state) => state.login.currentUser);
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
                     <p>그랬구나..! {currentUser.nickname}(이)는 어떤 말이 듣고 싶어?</p>
                </S.QuestionWrapper>
 
                <S.TextAreaWrapper >
                    <textarea value={value} onChange={onChangeValue} placeholder="누구에게 어떤 말을 듣고 싶어?"></textarea>
                </S.TextAreaWrapper>
                 
                <S.SaveButtonWrapper>
                    <Link to={'/myMind/inMyMind05'}>
                        <Button id='goToSave' onClick={handleSave} size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>
                            저장
                        </Button>
                    </Link>
                </S.SaveButtonWrapper>
            
             </S.Wrapper>
        </>
    )
};

export default InMyMind04;