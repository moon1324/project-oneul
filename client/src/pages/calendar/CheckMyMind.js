import React, { useContext, useState } from 'react';
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faTrashCan,faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import { FormContext } from '../myMind/context/FormContext';
import { Link } from 'react-router-dom';
import DeleteMyMind from './DeleteMyMind';
import classNames from 'classnames';


const CheckMyMind = () => {
    
    const {state} = useContext(FormContext);
    const [visible,setVisible]=useState(false);
    console.log(visible)
    const formDatas=state.formData;
    
    return (
        <>
        {visible&&<DeleteMyMind visible={visible} setVisible={setVisible}/>}
            {/* 왜 안돼!!!!!!!!!!!!!!!!! */}
            <S.CheckMyMindContainer>
            <div className={visible?'grayBackground':''}></div>
                <S.IconsWrapper>
                    <Link to={'/calendar/checkMyMind/modifyMyMind'}><FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare'/></Link>
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
                        <div className='answer'>{formDatas[0]}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    </div>
                </S.ContentWrapper>

                <S.ContentWrapper >
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>감정에 대한 상황
                        <div className='answer'>{formDatas[1]}bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</div>
                    </div>
                </S.ContentWrapper>

                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>내가 바라는 것
                        <div className='answer'>{formDatas[2]}</div>
                    </div>
                </S.ContentWrapper>

                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>내가 남에게 듣고 싶은 말
                        <div className='answer'>{formDatas[3]} </div>
                    </div>
                </S.ContentWrapper>

                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>내가 나에게 해주고 싶은 말
                        <div className='answer'> {formDatas[4]} </div>
                    </div>
                        
                </S.ContentWrapper>

                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>마음일지를 쓰고 난 후 나의 마음
                        <div className='answer'> {formDatas[5]} </div>
                    </div>
                </S.ContentWrapper>

            </S.CheckMyMindContainer>
        </>

    );
};

export default CheckMyMind;