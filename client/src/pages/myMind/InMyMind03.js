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

const InMyMind03 = ({index}) => {

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
                     <p>그럼 {currentUser.nickname}(이)는 그 상황에서 무엇을 바랐어?</p>
                 </S.QuestionWrapper>
 
                 <form action="" method="post">
                     <S.TextAreaWrapper >
                         <textarea value={value} onChange={onChangeValue} placeholder="내가 정말로 원했던 것은 뭘까?"></textarea>
                     </S.TextAreaWrapper>
                 </form>
                 
                 <S.SaveButtonWrapper>
                     <Link to={'/myMind/inMyMind04'}><Button id='goToSave' onClick={handleSave} size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>저장</Button></Link>
                 </S.SaveButtonWrapper>
            
             </S.Wrapper>
        </>
    )
};

export default InMyMind03;