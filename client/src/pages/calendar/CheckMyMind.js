import React, {useEffect, useState } from 'react';
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faTrashCan,faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import DeleteMyMind from './DeleteMyMind';

const CheckMyMind = () => {
    
    const [datas,setDatas]=useState([]);
    const [visible,setVisible]=useState(false);
    
    const [searchParams] = useSearchParams();
    const date = searchParams.get('date');
    
    const navigate=useNavigate();
    
    
    useEffect(() => {
        const getDatas = async () => {
            try {
                const response = await fetch(`http://localhost:8000/myMind/get?date=${date}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                if (!response.ok) {
                  throw new Error('데이터를 가져오는 데 실패했습니다.');
                }
                const data = await response.json();
                setDatas(data);
                } catch (error) {
                console.error('에러 발생:', error);
              }
            }
            if(date){
                getDatas();
            }
            },[date]);
            //data가 변경될 때마다 getDatas 함수가 실행
    
    return (
        <>
        {visible&&<DeleteMyMind visible={visible} setVisible={setVisible} date={date}/>}
            <S.CheckMyMindContainer>
                <div className={visible?'grayBackground':''}>
                    <S.IconsWrapper>
                        <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare' 
                        onClick={() => navigate(`/calendar/checkMyMind/modifyMyMind?date=${date}`)}/>
                        <div>
                        <FontAwesomeIcon onClick={()=>{setVisible(!visible);}} icon={faTrashCan} className='faTrashCan'/>
                        </div> 
                        <Link to={'/calendar'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link> 
                    </S.IconsWrapper>
                    
                    <S.TitleWrapper>
                        나의 마음보기
                    </S.TitleWrapper>
                
                    <S.ContentWrapper >
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <div >오늘 내가 느낀 감정
                            <div className='answer'>{datas[0]}</div>
                        </div>
                    </S.ContentWrapper>

                    <S.ContentWrapper >
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <div>감정에 대한 상황
                            <div className='answer'>{datas[1]}</div>
                        </div>
                    </S.ContentWrapper>

                    <S.ContentWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <div>내가 바라는 것
                            <div className='answer'>{datas[2]}</div>
                        </div>
                    </S.ContentWrapper>

                    <S.ContentWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <div>내가 남에게 듣고 싶은 말
                            <div className='answer'>{datas[3]} </div>
                        </div>
                    </S.ContentWrapper>

                    <S.ContentWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <div>내가 나에게 해주고 싶은 말
                            <div className='answer'>{datas[4]} </div>
                        </div>
                    </S.ContentWrapper>

                    <S.ContentWrapper>
                        <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                        <div>마음일지를 쓰고 난 후 나의 마음
                            <div className='answer'> {datas[5]} </div>
                        </div>
                    </S.ContentWrapper>
                </div>
            </S.CheckMyMindContainer>
        </>
    );
};

export default CheckMyMind;


