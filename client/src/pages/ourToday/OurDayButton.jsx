import React, { useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const OurDayButton = ({getTabStatus}) => {
    // 게시글의 탭 관리를 위한 상태관리
    const [tab, setTab] = useState("ourToday");

    // 우리의 오늘 탭이 활성화될시 실행되는 함수
    function activateTabToOurToday() {
        setTab("ourToday")
        return getTabStatus("ourToday")
    }

    // 나의 오늘 탭이 활성화될시 실행되는 함수
    function activateTabToMyToday() {
        setTab("myToday")
        return getTabStatus("myToday")
    }

    return (
        <S.contentButtonWrapper>
                <S.buttonsContainer>
                    <S.dayButtonWrapper onClick={activateTabToOurToday} className={tab === "ourToday" ? "activeTab" : ""}>
                            우리의 오늘
                    </S.dayButtonWrapper>
                    <S.dayButtonWrapper onClick={activateTabToMyToday} className={tab === "myToday" ? "activeTab" : ""}>
                            나의 오늘
                    </S.dayButtonWrapper>
                </S.buttonsContainer>
                <S.writingButtonWrapper>
                        <Link to={"/writeToday"}>
                            <S.writingButton>
                                나의 오늘 쓰기
                            </S.writingButton>
                        </Link>
                </S.writingButtonWrapper>
        </S.contentButtonWrapper>
    );
};

export default OurDayButton;