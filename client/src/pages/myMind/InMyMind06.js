import React, { useEffect } from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link,  useNavigate} from "react-router-dom";
import TitleStep from "./TitleStep";
import {FormContext } from "./context/FormContext";
import { useContext, useState } from "react";

const InMyMind06 = ({index}) => {
    
    const navigate = useNavigate();
    
    const {state, actions} = useContext(FormContext);
    const [value, setValue] = useState(state.formData[index]||"");
    const [lastData,setLastData]=useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const onChangeValue = (e) => {
        setValue(e.target.value);
        setLastData(true);
    };
    
    const handleReset=()=>{
        actions.resetFormData();
    }
    
    //왜 5번 페이지에서만 콘솔이 두 번 찍히지???!!!
    //->6번 페이지로 이동할 때 useEffect가 사용되서!
    //useEffect 사용하지 않을 시 6번 페이지에서 제출 버튼을 2번 눌러야 페이지가 이동됨
    useEffect(()=>{
        actions.updateFormData(index, value);
    },[lastData])
   
    const handleSubmit= () => {
        
        actions.updateFormData(index, value);
        
        let formData = state.formData;
    
        if (!formData.some((data) => data === "" )) {    
            navigate("/")
            handleReset();
        }else {
            const emptyIndex = actions.findEmptyFieldIndex();
            if (emptyIndex !== -1) {
                setAlertMessage(`${emptyIndex + 1}번 질문에 답변을 해주세요!`);
            return;
            }
        };
    };

    // setValue("");
    // const handleSave = async() => {
    //     try {
    //       await fetch('', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ formData }),
    //       });
         
    //     } catch (error) {
    //       console.error('error in fetch:', error);
    //     }
        
    //   };

    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>지금 마음이 어때~?</p>
                </S.QuestionWrapper>
                    
                <S.TextAreaWrapper >
                    <textarea id='lastTextarea' value={value} onChange={onChangeValue} placeholder="나의 감정을 살펴보니까 무슨 마음이 들어? "></textarea>
                </S.TextAreaWrapper>
                
                {alertMessage && (
                    <S.AlertWrapper>
                        <p>{alertMessage}</p>
                    </S.AlertWrapper>
                )}
                
                <S.SaveButtonWrapper>
                    <Button  onClick={handleSubmit} size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>제출</Button>
                 </S.SaveButtonWrapper>
                 
             </S.Wrapper>
        </>
    )
};

export default InMyMind06;


