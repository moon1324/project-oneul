import React, { useContext, useState } from 'react';
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faTrashCan,faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import { FormContext } from '../myMind/context/FormContext';
import { Link } from 'react-router-dom';
import Button from '../../components/button/style';

const DeleteMyMind = ({visible,setVisible}) => {

    // const {state} = useContext(FormContext);
    // // console.log(state.formData);
    // const formDatas=state.formData;

    // const [visible, setVisible] = useState(true);
   
    return (
    <>  
        
            {visible&&
            <S.DeletePageContainer>
                <S.DeleteContainer>
                
                <S.DeleteTitle>삭제</S.DeleteTitle>
                <S.DeleteTexts>
                    <div>내용을 정말로 삭제하시겠습니까?</div>
                    <div>삭제 시 복구할 수 없습니다.</div>
                </S.DeleteTexts>

                <S.DeleteButtons>
                    <Button onClick={()=>{setVisible(false)}}id='button01' size={"small"} border={"hoverSkyblue"} variant={"skyblue"} color={"white"}>취소</Button>
                    <Link to={'/calendar'}><Button id='button02' size={"small"} border={"hoverRed"} variant={"red"} color={"white"}>삭제</Button></Link>
                </S.DeleteButtons>
            
                </S.DeleteContainer>
                </S.DeletePageContainer>
            }

        </>
    );
};

export default DeleteMyMind;



//  <S.CheckMyMindContainer>
            
//                 <S.IconsWrapper>
//                     <Link to={'/calendar/checkMyMind/modifyMyMind'}><FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare'/></Link> 
//                     <Link to={'/calendar/checkMyMind/deleteMyMind'}><FontAwesomeIcon icon={faTrashCan} className='faTrashCan'/></Link> 
//                     <Link to={'/calendar'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link> 
//                 </S.IconsWrapper>
                
//                 <S.TitleWrapper>
//                     나의 마음보기
//                 </S.TitleWrapper>
            
//                 <S.ContentWrapper >
//                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
//                     <div >오늘 내가 느낀 감정
//                         <div className='answer'>{formDatas[0]}</div>
//                     </div>
//                 </S.ContentWrapper>

//                 <S.ContentWrapper >
//                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
//                     <div>감정에 대한 상황
//                         <div className='answer'>{formDatas[1]}</div>
//                     </div>
//                 </S.ContentWrapper>

//                 <S.ContentWrapper>
//                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
//                     <div>내가 바라는 것
//                         <div className='answer'>{formDatas[2]}</div>
//                     </div>
//                 </S.ContentWrapper>

//                 <S.ContentWrapper>
//                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
//                     <div>내가 남에게 듣고 싶은 말
//                         <div className='answer'>{formDatas[3]} </div>
//                     </div>
//                 </S.ContentWrapper>

//                 <S.ContentWrapper>
//                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
//                     <div>내가 나에게 해주고 싶은 말
//                         <div className='answer'> {formDatas[4]} </div>
//                     </div>
                        
//                 </S.ContentWrapper>

//                 <S.ContentWrapper>
//                     <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
//                     <div>마음일지를 쓰고 난 후 나의 마음
//                         <div className='answer'> {formDatas[5]} </div>
//                     </div>
//                 </S.ContentWrapper>

//             </S.CheckMyMindContainer>