import React, { useContext, useState } from 'react';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/style';

const DeleteMyMind = ({visible,setVisible,date}) => {

    const navigate=useNavigate();
    const handleDelete = async () => {
        try {
            const response = await fetch('http://localhost:8000/myMind/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    createdAt:date
                }),
            });
            if (!response.ok) {
                throw new Error('데이터 삭제에 실패했습니다.');
            }
            
            setVisible(false);
            
        } catch (error) {
            console.error('데이터 삭제 중 에러 발생:', error);
        }
    };

    const navigateToCalendar = () => {
        navigate(`/calendar`);
    };

    
   
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
                    <Button onClick={()=>{handleDelete(); navigateToCalendar()}}
                    id='button02' size={"small"} border={"hoverRed"} variant={"red"} color={"white"}>삭제</Button>
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