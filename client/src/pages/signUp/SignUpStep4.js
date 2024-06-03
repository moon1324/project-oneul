import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import OneulButton from "../../components/button/OneulButton";

const SignUpProfileImg = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"}>
                        <img src={`${process.env.PUBLIC_URL}/global/images/logo.png`} alt="logo" />
                    </Link>
                </S.LogoWrapper>
                <S.ContentContainer>
                    <S.Label htmlFor="profile-img">
                        <p>다른 사람들이 볼 내 얼굴을 올려보세요</p>
                        <div style={{ width: "140px", height: "140px" }}>
                            <label></label>
                        </div>
                        <input type="file" id="attach" style="display: none;" />
                    </S.Label>
                </S.ContentContainer>
                <S.ButtonContainer>
                    <Link to="/signUp/5">
                        <OneulButton variant={"indigo"} border={"default"} size={"large"} color={"white"}>
                            다음
                        </OneulButton>
                    </Link>
                </S.ButtonContainer>
            </S.Wrapper>
        </S.Background>
    );
};

export default SignUpProfileImg;
