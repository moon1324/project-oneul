import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/style";
import OneulButton from "../../components/button/OneulButton";
import { useDispatch, useSelector } from "react-redux";
import { updateSignUpData, resetSignUpData } from "../../modules/signUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useInput from "../../hooks/useInput";

const SignUpNickname = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signUpData = useSelector((state) => state.signup);

    const [nickname, setNickname, handleNicknameChange] = useInput("");
    const [nicknameError, setNicknameError] = useState("");

    useEffect(() => {
        console.log("SignUpStep3 signUpData:", signUpData);
    }, [signUpData]);

    const validateNickname = () => {
        if (nickname === "") {
            setNicknameError("required");
            return false;
        }
        // 닉네임 중복시 에러메세지 추가
        // 나중에 db조회값과 비교
        if (nickname === "existingNickname") {
            setNicknameError("duplicate");
            return false;
        }
        setNicknameError("");
        return true;
    };

    // 모든 조건 통과 시, 이름과 전화번호를 redux의 store에 저장, step3로 이동
    const handleOnClickNext = () => {
        if (validateNickname()) {
            dispatch(updateSignUpData({ nickname }));
            navigate("/signUp/4");
        }
    };

    // 로고 클릭 시 store 초기화
    const handleOnClickLogin = () => {
        dispatch(resetSignUpData());
        navigate("/logIn");
    };

    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"} onClick={handleOnClickLogin}>
                        <img src={`${process.env.PUBLIC_URL}/global/images/logo.png`} alt="logo" />
                    </Link>
                </S.LogoWrapper>
                <S.ContentContainer>
                    <S.Label htmlFor="nickname">
                        <p>닉네임</p>
                        <Input
                            variant={"active"}
                            size={"default"}
                            value={nickname}
                            placeholder="닉네임을 입력해주세요"
                            onChange={handleNicknameChange}
                            onBlur={validateNickname}
                        />
                        <S.ConfirmMessageWrapper>
                            {nicknameError === "required" && (
                                <S.ConfirmMessage>
                                    <FontAwesomeIcon icon={faCircleXmark} className="icon" />
                                    닉네임을 입력해주세요.
                                </S.ConfirmMessage>
                            )}
                            {nicknameError === "duplicate" && (
                                <S.ConfirmMessage>
                                    <FontAwesomeIcon icon={faCircleXmark} className="icon" />
                                    닉네임이 이미 사용 중입니다.
                                </S.ConfirmMessage>
                            )}
                        </S.ConfirmMessageWrapper>
                    </S.Label>
                </S.ContentContainer>
                <S.ButtonContainer>
                    <OneulButton variant={"indigo"} border={"default"} size={"large"} color={"white"} onClick={handleOnClickNext}>
                        다음
                    </OneulButton>
                </S.ButtonContainer>
            </S.Wrapper>
        </S.Background>
    );
};

export default SignUpNickname;
