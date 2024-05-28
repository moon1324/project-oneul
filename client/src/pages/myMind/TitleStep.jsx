import React from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';

const TitleStep = () => {
    return (
        <div>
            <S.TitleWrapper>
                    <p>나의 마음보기</p>
                </S.TitleWrapper>

                <S.DivNumberButtonWrapper>
                    <NavLink to={"/myMind/InMyMind01"}>
                        <button>1</button>
                    </NavLink>
                    
                    <S.DivWrapper>
                        <div></div>
                        <NavLink to={"/myMind/InMyMind02"}>
                            <button>2</button>
                        </NavLink>
                    </S.DivWrapper>
                    
                    <S.DivWrapper>
                        <div></div>
                        <NavLink to={"/myMind/InMyMind03"}>
                            <button>3</button>
                        </NavLink>
                    </S.DivWrapper>
                    
                    <S.DivWrapper>
                        <div></div>
                        <NavLink to={"/myMind/InMyMind04"}>
                            <button>4</button>
                        </NavLink>
                    </S.DivWrapper>
                    
                    <S.DivWrapper>
                        <div></div>
                        <NavLink to={"/myMind/InMyMind05"}>
                            <button>5</button>
                        </NavLink>
                    </S.DivWrapper>

                    <S.DivWrapper>
                        <div></div>
                        <NavLink to={"/myMind/InMyMind06"}>
                            <button>6</button>
                        </NavLink>
                    </S.DivWrapper>
                </S.DivNumberButtonWrapper>
        </div>
    );
};

export default TitleStep;