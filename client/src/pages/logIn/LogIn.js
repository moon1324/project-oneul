import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import OneulInput from "../../components/input/OneulInput";
import OneulButton from "../../components/button/OneulButton";

const LogIn = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"}>
                        <img src={process.env.PUBLIC_URL + "global/images/logo.png"} />
                    </Link>
                </S.LogoWrapper>
                <S.LoginForm>
                    <S.LoginLabel>
                        <p>이메일</p>
                        <OneulInput variant={"active"} size={"default"} />
                    </S.LoginLabel>
                    <S.LoginLabel>
                        <p>비밀번호</p>
                        <OneulInput variant={"active"} size={"default"} />
                    </S.LoginLabel>
                    <OneulButton variant={"skyblue"} border={"default"} size={"large"} color={"white"}>
                        로그인
                    </OneulButton>
                </S.LoginForm>
                <S.ToSignUp>
                    <Link to={"/signUp"}>
                        <OneulButton variant={"indigo"} border={"default"} size={"large"} color={"white"}>
                            회원가입
                        </OneulButton>
                    </Link>
                </S.ToSignUp>
            </S.Wrapper>
        </S.Background>
    );
};

export default LogIn;
