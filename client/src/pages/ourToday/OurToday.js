import React, { useState } from "react";
import OurDayButton from "./OurDayButton";
import OurDay from "./OurDay";
import S from "./style";

const OurToday = () => {
    const [tabActive, setTabActive] = useState();

    const getTabStatus = (tabText) => {
        setTabActive(tabText);
    }

    return (
        <>
            <S.ourTodayContainer>
                <OurDayButton getTabStatus={getTabStatus}/>
                <OurDay tabActive={tabActive} setTabActive={setTabActive}/>
            </S.ourTodayContainer>
        </>
    );
};

export default OurToday;
