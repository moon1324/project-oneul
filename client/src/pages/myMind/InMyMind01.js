import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import TitleStep from "./TitleStep";
import { Link } from "react-router-dom";
import {FormContext } from "./context/FormContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const InMyMind01 = ({index}) => {

    const currentUser = useSelector((state) => state.login.currentUser);
    const {state, actions} = useContext(FormContext);
    const [value, setValue] = useState(state.formData[index]||"");
    
    const onChangeValue = (e) => {
        setValue(e.target.value);
    };
  
    const handleSave= () => {
        actions.updateFormData(index, value);
    };

    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                <S.QuestionWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <p>오늘 {currentUser.nickname}(이)는 어떤 감정들을 느꼈어?</p>
                </S.QuestionWrapper>
 
                <S.TextAreaWrapper >
                    <textarea value={value} onChange={onChangeValue} placeholder="하루 동안 내가 느낀 감정을 되돌아보자~!"></textarea>
                </S.TextAreaWrapper>
                 
                 
                <S.SaveButtonWrapper>
                    <Link to={'/myMind/inMyMind02'}>
                        <Button id='goToSave' onClick={handleSave} size={"large"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>저장</Button>
                    </Link>
                </S.SaveButtonWrapper>
            
            </S.Wrapper>
        </>
    )
};

export default InMyMind01;

