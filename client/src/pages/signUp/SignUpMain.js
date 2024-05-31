import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import OneulButton from "../../components/button/OneulButton";

const SignUpMain = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"}>
                        <img src={process.env.PUBLIC_URL + "global/images/logo.png"} />
                    </Link>
                </S.LogoWrapper>
                <S.ContentContainer>
                    <OneulButton variant={"disabled"} border={"default"} size={"large"} color={"black"}>
                        카카오로 시작하기
                    </OneulButton>
                    <OneulButton variant={"disabled"} border={"default"} size={"large"} color={"black"}>
                        Google 계정으로 로그인
                    </OneulButton>
                </S.ContentContainer>
                <S.ButtonContainer>
                    <Link to={"/signUp/1"}>
                        <OneulButton variant={"indigo"} border={"default"} size={"large"} color={"white"}>
                            다른 방법으로 시작하기
                        </OneulButton>
                    </Link>
                </S.ButtonContainer>
            </S.Wrapper>
        </S.Background>
    );
};

export default SignUpMain;
