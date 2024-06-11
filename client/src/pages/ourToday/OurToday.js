import React from "react";
import OurDayButton from "./OurDayButton";
import OurDay from "./OurDay";
import S from "./style";

const OurToday = () => {
    return (
        <>
            <S.ourTodayContainer>
                <OurDayButton />
                <OurDay />
            </S.ourTodayContainer>
        </>
    );
};

export default OurToday;
