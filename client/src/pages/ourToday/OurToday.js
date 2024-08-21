import React, { useState } from "react";
import OurDayButton from "./OurDayButton";
import S from "./style";
import OurTodayCardPostContainer from "./OurTodayCardPostContainer";

const OurToday = () => {
    // 하위 컴포넌트로부터 tab의 활성화 정보를 전달받을 상태관리
    const [tabActive, setTabActive] = useState("ourToday");

    // 하위 컴포넌트로부터 tab의 활성화 정보(문자열)을 전달받을 함수
    const getTabStatus = (tabText) => {
        setTabActive(tabText);
    }


    return (
        <div>
            <OurDayButton getTabStatus={getTabStatus}/>
            <OurTodayCardPostContainer tabActive={tabActive} setTabActive={setTabActive}/>
        </div>
    );
};

export default OurToday;
