import React from 'react';
import S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

const Banner2 = () => {
    return (
        <S.BannerContainer>
        <S.BannerWrapper id='banner3_wrapper'>
            <Link to={'/'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link>
            <S.BannerImageBox>
                <img src={process.env.PUBLIC_URL+"/images/banner/banner3.svg"} />
            </S.BannerImageBox>
            <S.BannerConBox>
                <p>마음일지를 작성하는 방법을 같이 살펴볼까요~?</p>
                <br/><p>마음일지의 질문을 읽고, 질문 밑의 하얀 창을 클릭해서 답변을 작성해 주세요.<br/> 하얀 창 안에 적혀있는 내용은, 질문을 조금 더 구체적으로 명시한 것이니 참고해 주세요.</p>
                <br/><p>아래는 질문 답변에 대한 예시에요.<br/> 이 형식을 따라 할 필요는 없고 아주 자유롭게, 나의 문체로 작성해 주시면 돼요!</p>
                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>오늘 오늘(이)는 어떤 감정들을 느꼈어?</p>
                 </S.QuestionWrapper>
                 <S.TextWrapper >
                    <div>오늘은 뿌듯했고, 예민했고, 지루했고, 해방감을 느꼈고 그리고 조금 외로웠어.</div>
                </S.TextWrapper>

                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>어떤 상황 때문에 이 감정들을 느꼈어?</p>
                 </S.QuestionWrapper>
                 <S.TextWrapper >
                    <div>아침 6시 30분에 일어나서 운동을 하는 목표를 지켜서 아주 뿌듯했어. 이전 날들에는 빈번히 목표를 지키지 못해서 아쉬웠는데 오늘은 지킬 수 있어서 다행이었어. 출근할 때 시간 여유가 별로 없었는데 지하철이 늦게 오고 사람들이 평소보다 더 많이 밀착되어 있어서 예민해졌어. 직장에서 한 작업을 하는데 진전이 없어서 지루했고 퇴근하고 집에 도착했을 때 해방감과 피로감이 찾아왔어. 잘 준비를 하고 침대에 누워 휴대폰을 하는데 문득 조금 외롭다고 느껴졌어.</div>
                </S.TextWrapper>

                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>그럼 오늘(이)는 그 상황에서 무엇을 바랐어?</p>
                 </S.QuestionWrapper>
                 <S.TextWrapper >
                    <div>아침에 운동을 하면서 앞으로도 내가 목표했던 계획을 꾸준히 지키길 바랐어. 출퇴근할 때는 지하철은 꼭 타야 하니까 그때마다 스트레스받고 예민해지지 않길 바랐어. 직장에서는 지루해도 끝까지 집중해서 일하기를 바랐어. 문득 외로움이 찾아올 때마다 마음이 많이 허해지는데 그럴 때마다 외로움에 초연해지길 바랐어.</div>
                </S.TextWrapper>

                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>그랬구나..! 오늘(이)는 어떤 말이 듣고 싶어?</p>
                 </S.QuestionWrapper>
                 <S.TextWrapper >
                    <div>"오늘도 수고했어. 똑같은 일과를 반복하면서 사는 건 힘든 일이야. 그럼에도 잘 버텨내고 그 안에서 즐거움을 찾다니..! 넌 참 멋있어."</div>
                </S.TextWrapper>

                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>오늘(이)는 자신에게 어떤 말을 해주고 싶어?</p>
                 </S.QuestionWrapper>
                 <S.TextWrapper >
                    <div>"외로움은 인간과 떨어질 수 없어. 사랑하는 사람들이 있어도 혼자만의 외로움은 존재해. 외로움을 느낌으로써 다른 감정들이 더 풍부해지고 많은 걸 느낄 수 있을 거야."</div>
                </S.TextWrapper>

                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>지금 마음이 어때~?</p>
                 </S.QuestionWrapper>
                 <S.TextWrapper >
                    <div>오늘 별 탈 없이 하루를 잘 살고 침대에 누워서 안도감이 들어.</div>
                </S.TextWrapper>
            </S.BannerConBox>
        </S.BannerWrapper>
    </S.BannerContainer>
    );
};

export default Banner2;