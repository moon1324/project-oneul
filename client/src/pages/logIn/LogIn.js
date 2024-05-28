import React from "react";
import S from "./style";

const LogIn = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <div
                    className="logo-wrapper"
                    style={{ width: "120px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
                >
                    <div className="oneul" style={{ width: "82px", height: "64px" }}>
                        <img src={process.env.PUBLIC_URL + "global/images/oneul.png"} style={{ width: "100%" }} />
                    </div>
                    <div className="cloud-moon" style={{ width: "48px", height: "36px", position: "absolute", left: "" }}>
                        <img src={process.env.PUBLIC_URL + "global/images/cloud_moon.png"} style={{ width: "100%" }} />
                    </div>
                </div>
                {/* <S.Twincle>
                    <div className="login-form"></div>
                    <div className="to-SignUp"></div>
                </S.Twincle> */}
            </S.Wrapper>
        </S.Background>
    );
};

export default LogIn;
