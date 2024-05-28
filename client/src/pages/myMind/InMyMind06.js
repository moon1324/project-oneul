import React from "react";
import S from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudMoon, faFaceGrimace} from "@fortawesome/free-solid-svg-icons";
import {faFaceSmile,faFaceSadTear,faFaceMehBlank,faFaceTired,faFaceGrinSquint,faFaceFrown,
        faFaceAngry,faFaceKissBeam,faFaceGrinWink} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/style";
import { Link} from "react-router-dom";
import TitleStep from "./TitleStep";

const InMyMind06 = () => {
    return (
        <>
            <S.Wrapper>
                
                <TitleStep/>
                 
                <S.QuestionWrapper>
                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                     <p>지금 마음이 어때~?</p>
                </S.QuestionWrapper>
 
                <form action="" method="post">
                    <S.FaceIconWrapper>
                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceSmile} />
                            <div>평온해</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceGrinSquint} />
                            <div>즐거워</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceKissBeam} />
                            <div>기대돼</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" id="#laughSad" icon={faFaceGrinWink} />
                            <div>뿌듯해</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceMehBlank} />
                            <div>...</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceSadTear} />
                            <div>슬퍼</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceFrown} />
                            <div>속상해</div> 
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceGrimace} />
                            <div>불편해</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" id="#laughSad" icon={faFaceTired } />
                            <div>짜증나</div>
                        </S.FaceTextWrapper>

                        <S.FaceTextWrapper>
                            <FontAwesomeIcon className="faceIcon" icon={faFaceAngry} />
                            <div>화나</div>
                        </S.FaceTextWrapper>
                    </S.FaceIconWrapper>
                    
                    <S.LastTextAreaWrapper >
                        <textarea placeholder="해당되는 마음이 없다면 글로 써봐!"></textarea>
                    </S.LastTextAreaWrapper>
                 </form>
                 
                 <S.SaveButtonWrapper>
                     <Link to={'/'}>
                        <Button id='lastButton' size={"large"} border={"hoverIndigo"} variant={"indigo"} color={"white"}>저장</Button>
                    </Link>
                 </S.SaveButtonWrapper>
            
             </S.Wrapper>
            
        </>
    
    )
};

export default InMyMind06;