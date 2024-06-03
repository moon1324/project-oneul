import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import OneulButton from "../../components/button/OneulButton";

const SignUpOrigin = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"}>
                        <img src={`${process.env.PUBLIC_URL}/global/images/logo.png`} alt="logo" />
                    </Link>
                </S.LogoWrapper>
                <S.ContentContainer></S.ContentContainer>
                <S.ButtonContainer>
                    <Link to="/signUp/6">
                        <OneulButton variant={"indigo"} border={"default"} size={"large"} color={"white"}>
                            다음
                        </OneulButton>
                    </Link>
                </S.ButtonContainer>
            </S.Wrapper>
        </S.Background>
    );
};

export default SignUpOrigin;
