import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import OneulButton from "../../components/button/OneulButton";
import { useDispatch, useSelector } from "react-redux";
import { updateSignUpData, resetSignUpData } from "../../modules/signUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const SignUpStep5 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signUpData = useSelector((state) => state.signup);
    const [origin, setOrigin] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        console.log("SignUpStep5 signUpData:", signUpData);
    }, [signUpData]);

    // 체크박스가 눌리지 않고 다음버튼 클릭 시, 하나 이상 입력하라는 경고메세지 출력
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setOrigin((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
    };
    // 체크박스를 하나이상 눌렀을 때 다음 버튼을 누르면 체크박스 라벨 안에 같이 있는 p값을 가져와서 store의 origin에 저장, 이제까지 step1-5에서 저장한 store에 있는 모든 값을 db에 전송 (회원가입), 그리고 성공페이지 이동
    const handleOnClickNext = async () => {
        if (origin.length === 0) {
            setShowError(true);
            return;
        }
        setShowError(false);
        dispatch(updateSignUpData({ origin }));

        // 서버로 데이터 전송
        try {
            const response = await fetch("http://localhost:8000/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: signUpData.email,
                    password: signUpData.password,
                    name: signUpData.name,
                    mobile: signUpData.mobile,
                    nickname: signUpData.nickname,
                    profileImg: signUpData.profileImg,
                    // origin: signUpData.origin,
                    // signUpData.origin으로 접근하면 빈배열이 들어간다
                    // origin 직접 추가
                    origin: origin,
                    token: "",
                }),
            });
            // .then((response) => console.log(response, "response data"));
            console.log(response, "response data");

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || "SignUp failed");
            }

            // 성공적으로 회원가입이 완료되면 성공 페이지로 이동
            navigate("/signUp/success");
        } catch (error) {
            console.error("Error during sign-up:", error);
        }
        console.log("서버 전송 로직 실행");

        dispatch(resetSignUpData());
        console.log("기존 store의 데이터 초기화");

        navigate("/signUp/success");
    };

    const handleOnClickLogin = () => {
        dispatch(resetSignUpData());
        navigate("/logIn");
    };

    const handleOnClickBack = () => {
        dispatch(updateSignUpData({ origin: "" }));
        navigate("/signUp/4");
    };

    return (
        <S.Background>
            <S.Wrapper>
                <S.BackWrapper>
                    <FontAwesomeIcon icon={faArrowLeft} className="icon" onClick={handleOnClickBack} />
                </S.BackWrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"} onClick={handleOnClickLogin}>
                        <img src={`${process.env.PUBLIC_URL}/global/images/logo.png`} alt="logo" />
                    </Link>
                </S.LogoWrapper>
                <S.ContentContainer>
                    <S.LabelCentered>
                        <p>어떻게 오늘을 알게 되셨나요?</p>
                        <S.CheckboxContainer>
                            <S.CheckboxRowContainer>
                                <S.CheckboxRow>
                                    <S.CheckboxLabel>
                                        <input type="checkbox" value="인터넷 검색" onChange={handleCheckboxChange} />
                                        <p>인터넷 검색</p>
                                    </S.CheckboxLabel>
                                    <S.CheckboxLabel>
                                        <input type="checkbox" value="지인 추천" onChange={handleCheckboxChange} />
                                        <p>지인 추천</p>
                                    </S.CheckboxLabel>
                                    <S.CheckboxLabel>
                                        <input type="checkbox" value="광고" onChange={handleCheckboxChange} />
                                        <p>광고</p>
                                    </S.CheckboxLabel>
                                </S.CheckboxRow>
                                <S.CheckboxRow>
                                    <S.CheckboxLabel>
                                        <input type="checkbox" value="애플리케이션 검색" onChange={handleCheckboxChange} />
                                        <p>애플리케이션 검색</p>
                                    </S.CheckboxLabel>
                                    <S.CheckboxLabel>
                                        <input type="checkbox" value="홍보글" onChange={handleCheckboxChange} />
                                        <p>홍보글</p>
                                    </S.CheckboxLabel>
                                    <S.CheckboxLabel>
                                        <input type="checkbox" value="기타" onChange={handleCheckboxChange} />
                                        <p>기타</p>
                                    </S.CheckboxLabel>
                                </S.CheckboxRow>
                            </S.CheckboxRowContainer>
                            {showError && (
                                <S.ConfirmMessageWrapper>
                                    <S.ConfirmMessage>
                                        <FontAwesomeIcon icon={faCircleXmark} className="icon" style={{ marginLeft: "40px" }} />
                                        하나 이상 체크해주세요
                                    </S.ConfirmMessage>
                                </S.ConfirmMessageWrapper>
                            )}
                        </S.CheckboxContainer>
                    </S.LabelCentered>
                </S.ContentContainer>
                <S.ButtonContainer>
                    <Link to="/signUp/success">
                        {/* 다음버튼 누를 시 이 페이지의 체크박스값 저장, 그리고 store에 저장된 모든 정보 db에 전송 */}
                        <OneulButton variant={"indigo"} border={"default"} size={"large"} color={"white"} onClick={handleOnClickNext}>
                            다음
                        </OneulButton>
                    </Link>
                </S.ButtonContainer>
            </S.Wrapper>
        </S.Background>
    );
};

export default SignUpStep5;
