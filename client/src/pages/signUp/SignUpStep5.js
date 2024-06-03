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
                <S.ContentContainer>
                    <S.LabelCentered>
                        <p>어떻게 오늘을 알게 되셨나요?</p>
                        <S.CheckboxContainer>
                            <S.CheckboxRow>
                                <S.CheckboxLabel>
                                    <input type="checkbox" />
                                    <p>인터넷 검색</p>
                                </S.CheckboxLabel>
                                <S.CheckboxLabel>
                                    <input type="checkbox" />
                                    <p>지인 추천</p>
                                </S.CheckboxLabel>
                                <S.CheckboxLabel>
                                    <input type="checkbox" />
                                    <p>광고</p>
                                </S.CheckboxLabel>
                            </S.CheckboxRow>
                            <S.CheckboxRow>
                                <S.CheckboxLabel>
                                    <input type="checkbox" />
                                    <p>애플리케이션 검색</p>
                                </S.CheckboxLabel>
                                <S.CheckboxLabel>
                                    <input type="checkbox" />
                                    <p>홍보글</p>
                                </S.CheckboxLabel>
                                <S.CheckboxLabel>
                                    <input type="checkbox" />
                                    <p>기타</p>
                                </S.CheckboxLabel>
                            </S.CheckboxRow>
                        </S.CheckboxContainer>
                    </S.LabelCentered>
                </S.ContentContainer>
                <S.ButtonContainer>
                    <Link to="/signUp/success">
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
