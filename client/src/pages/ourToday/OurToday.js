import React from "react";
import OurDayButton from "./OurDayButton";
import { Outlet } from "react-router-dom";
import OurDay from "./OurDay";

const OurToday = () => {
    return (
        <div>
            <OurDayButton />
            <OurDay />
        </div>
    );
};

export default OurToday;
