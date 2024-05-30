import React from 'react';
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons'
import S from './style';


const Main = () => {
    return (
            <>
                <S.Wrapper>
                    <Link to={'/myMind'}>
                        <S.BoxWritingMymind>
                            <S.Contents>
                                <div className="header">
                                    <S.DateBox>
                                        <p>2024-05-27</p>
                                    </S.DateBox>
                                    <S.IconBox>
                                        <FontAwesomeIcon icon={faHeartCircleCheck}/>
                                    </S.IconBox>
                                </div>
                                <div className="body">
                                    <S.DialogBox>
                                        <p>오늘 하루는 어떠셨나요?</p>
                                        <p>오늘의 일지를 작성하러 가볼까요?</p>
                                    </S.DialogBox>
                                </div>
                            </S.Contents>
                        </S.BoxWritingMymind>    
                    </Link>
                </S.Wrapper>
                <Banner/>
                <S.Wrapper>
                    <S.BoxForOurToday>
                        <div className="header">
                            <h4>우리의 오늘</h4>
                            <Link to={'/ourToday'}>
                                <p>
                                    모두보기
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </p>    
                            </Link>
                        </div>
                        <div className="body">

                        </div>                       
                    </S.BoxForOurToday>
                </S.Wrapper>  
            </>    
    );
};

export default Main;