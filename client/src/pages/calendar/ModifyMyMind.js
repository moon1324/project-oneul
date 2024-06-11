import React, { useContext } from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Button from '../../components/button/style';
import { FormContext } from '../myMind/context/FormContext';

const ModifyMyMind = () => {

    const {state} = useContext(FormContext);
    
    const formDatas=state.formData;

    return (
        <>
            <S.PageContainer>
                
                <Link to={'/calendar/checkMyMind'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link> 

                <S.TitleWrapper>
                    나의 마음보기
                </S.TitleWrapper>

                <S.QuestionsWrapper>
                    {/* 1번 질문 */}
                    <S.QuestionWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <p>오늘 마크(이)는 어떤 감정들을 느꼈어?</p>
                    </S.QuestionWrapper>

                    <S.TextAreaWrapper>
                        <textarea></textarea>
                    </S.TextAreaWrapper>

                    {/* 2번 질문 */}
                    <S.QuestionWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <p>어떤 상황 때문에 이 감정들을 느꼈어?</p>
                    </S.QuestionWrapper>

                    <S.TextAreaWrapper>
                        <textarea ></textarea>
                    </S.TextAreaWrapper>

                    {/* 3번 질문 */}
                    <S.QuestionWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <p>그럼 마크(이)는 그 상황에서 무엇을 바랐어?</p>
                    </S.QuestionWrapper>

                    <S.TextAreaWrapper>
                        <textarea ></textarea>
                    </S.TextAreaWrapper>

                    {/* 4번 질문 */}
                    <S.QuestionWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <p>그랬구나..! 마크(이)는 어떤 말이 듣고 싶어?</p>
                    </S.QuestionWrapper>

                    <S.TextAreaWrapper>
                        <textarea ></textarea>
                    </S.TextAreaWrapper>

                    {/* 5번 질문 */}
                    <S.QuestionWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <p>마크(이)는 자신에게 어떤 말을 해주고 싶어?</p>
                    </S.QuestionWrapper>

                    <S.TextAreaWrapper>
                        <textarea ></textarea>
                    </S.TextAreaWrapper>

                    {/* 6번 질문 */}
                    <S.QuestionWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <p>지금 마음이 어때~?</p>
                    </S.QuestionWrapper>

                    <S.TextAreaWrapper>
                        <textarea ></textarea>
                    </S.TextAreaWrapper>

                    <S.ButtonWrapper>
                        <Link to={'/calendar/checkMyMind'}><Button  className="completedModifyButton" size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>수정 완료</Button></Link>
                    </S.ButtonWrapper>

                </S.QuestionsWrapper>
            </S.PageContainer>
        </>
    );
};

export default ModifyMyMind;