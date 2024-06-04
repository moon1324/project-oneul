import React, { useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const OurDayButton = () => {
    const [tab, setTab] = useState("ourToday");
    
    function activateTabToOurToday() {
        setTab("ourToday")
    }

    function activateTabToMyToday() {
        setTab("myToday")
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
                    <Link to={"/WriteToday"}>
                        <S.writingButton>
                            나의 오늘 쓰기
                        </S.writingButton>
                    </Link>
                </S.writingButtonWrapper>
        </S.contentButtonWrapper>
    );
};

export default OurDayButton;