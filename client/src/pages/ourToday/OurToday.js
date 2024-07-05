import React, { useState } from "react";
import OurDayButton from "./OurDayButton";
import S from "./style";
import OurTodayCardPostContainer from "./OurTodayCardPostContainer";

const OurToday = () => {
    const [tabActive, setTabActive] = useState("ourToday");

    const getTabStatus = (tabText) => {
        setTabActive(tabText);
    }

    return (
        <>
            <S.ourTodayContainer>
                <OurDayButton getTabStatus={getTabStatus}/>
                <OurTodayCardPostContainer tabActive={tabActive} setTabActive={setTabActive}/>
            </S.ourTodayContainer>
        </>
    );
};

export default OurToday;
