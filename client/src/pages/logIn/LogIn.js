import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import OneulInput from "../../components/input/OneulInput";
import Input from "../../components/input/style";
import OneulButton from "../../components/button/OneulButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },
    } = useForm({ mode: "onChange" });

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"}>
                        <img src={process.env.PUBLIC_URL + "global/images/logo.png"} />
                    </Link>
                </S.LogoWrapper>
                <S.LoginForm
                    onSubmit={handleSubmit(async (data) => {
                        console.log(data);
                    })}
                >
                    <S.LoginLabel>
                        <p>이메일</p>
                        {/* OneulInput쓰면 OneulInput에서 forwardRef를 써야해서 */}
                        {/* 쌤 코드처럼 스타일만 import */}
                        <Input
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: emailRegex,
                                },
                            })}
                            variant={"active"}
                            size={"default"}
                        />
                        <S.ConfirmMessageWrapper>
                            {errors?.email?.type === "required" && <S.ConfirmMessage>이메일을 입력해주세요.</S.ConfirmMessage>}
                        </S.ConfirmMessageWrapper>
                    </S.LoginLabel>

                    <S.LoginLabel>
                        <p>비밀번호</p>
                        <Input {...register("password")} variant={"active"} size={"default"} />
                        <S.ConfirmMessageWrapper>
                            {errors?.email?.type === "required" && <S.ConfirmMessage>이메일을 입력해주세요.</S.ConfirmMessage>}
                        </S.ConfirmMessageWrapper>
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
