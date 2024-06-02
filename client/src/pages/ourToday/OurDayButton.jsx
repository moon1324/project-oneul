import React, { useState } from 'react';
import S from './style';

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
                <S.buttonsWrapper>
                    <S.dayButtonWrapper onClick={activateTabToOurToday} className={tab === "ourToday" ? "activeTab" : ""}>
                            우리의 오늘
                    </S.dayButtonWrapper>
                    <S.dayButtonWrapper onClick={activateTabToMyToday} className={tab === "myToday" ? "activeTab" : ""}>
                            나의 오늘
                    </S.dayButtonWrapper>
                </S.buttonsWrapper>
                <S.writingButtonWrapper>
                    <S.writingButton>
                        나의 오늘 쓰기
                    </S.writingButton>
                </S.writingButtonWrapper>
        </S.contentButtonWrapper>
    );
};

export default OurDayButton;