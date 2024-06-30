import React, { useEffect } from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link,  useNavigate} from "react-router-dom";
import TitleStep from "./TitleStep";
import {FormContext } from "./context/FormContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const InMyMind06 = ({index}) => {
    
    const today = {
        year: new Date().getFullYear(), //오늘 연도
        month: new Date().getMonth()+1,  //오늘 월
        date: new Date().getDate(), //오늘 날짜
    }
    const createdAt=`${today.year}-${today.month}-${today.date}`;

    const navigate = useNavigate();
    
    const {state, actions} = useContext(FormContext);
    const [value, setValue] = useState(state.formData[index]||"");
    const [lastData,setLastData]=useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const currentUser=useSelector((state)=>state.login.currentUser)

    const onChangeValue = (e) => {
        setValue(e.target.value);
        setLastData(true);
    };
    
    const handleReset=()=>{
        actions.resetFormData();
    }
    
    useEffect(()=>{
        actions.updateFormData(index, value);
    },[lastData])
   
    const handleSubmit= async() => {
       
        actions.updateFormData(index, value);
        
        let formData = state.formData;
    
        if (formData.every((data) => data && data.trim() !== "")) {    
            try {
                const response = await fetch("http://localhost:8000/myMind/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId:currentUser,
                        userEmail:currentUser.email,
                        createdAt:createdAt,
                        questions:formData,
                    }),
                });
                // console.log(response, "response data");
    
                if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.message || "myMindPost failed");
                }
            } catch(error){
                console.error('error in fetch:', error);
            }
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
                    <Button id='goToSave' onClick={handleSubmit} size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>제출</Button>
                 </S.SaveButtonWrapper>
                 
             </S.Wrapper>
        </>
    )
};

export default InMyMind06;


