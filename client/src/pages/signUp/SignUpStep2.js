import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import Input from "../../components/input/style";
import OneulButton from "../../components/button/OneulButton";

const SignUpNameMobile = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"}>
                        <img src={`${process.env.PUBLIC_URL}/global/images/logo.png`} alt="logo" />
                    </Link>
                </S.LogoWrapper>
                <S.ContentContainer>
                    <S.Label htmlFor="name">
                        <p>이름</p>
                        <Input variant={"active"} size={"default"} />
                        <S.ConfirmMessageWrapper>
                            <S.ConfirmMessage></S.ConfirmMessage>
                        </S.ConfirmMessageWrapper>
                    </S.Label>
                    <S.Label htmlFor="mobile">
                        <p>전화번호</p>
                        <Input variant={"active"} size={"default"} />
                        <S.ConfirmMessageWrapper>
                            <S.ConfirmMessage></S.ConfirmMessage>
                        </S.ConfirmMessageWrapper>
                    </S.Label>
                </S.ContentContainer>
                <S.ButtonContainer>
                    <Link to="/signUp/3">
                        <OneulButton variant={"indigo"} border={"default"} size={"large"} color={"white"}>
                            다음
                        </OneulButton>
                    </Link>
                </S.ButtonContainer>
            </S.Wrapper>
        </S.Background>
    );
};

export default SignUpNameMobile;
