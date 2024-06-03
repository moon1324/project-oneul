import React, { useEffect } from "react";
import S from "./style";
import { Link } from "react-router-dom";
import OneulButton from "../../components/button/OneulButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SignUpProfileImg = () => {
    const signUpData = useSelector((state) => state.signup);

    useEffect(() => {
        console.log("SignUpStep4 signUpData:", signUpData);
    }, [signUpData]);

    return (
        <S.Background>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to={"/logIn"}>
                        <img src={`${process.env.PUBLIC_URL}/global/images/logo.png`} alt="logo" />
                    </Link>
                </S.LogoWrapper>
                <S.ContentContainer>
                    <S.LabelCentered htmlFor="profile-img">
                        <p>다른 사람들이 볼 내 얼굴을 올려보세요</p>
                        <label htmlFor="profile">
                            <S.ProfileWrapper>
                                <S.ImgWrapper>
                                    <img src="#" alt="profile-img"></img>
                                </S.ImgWrapper>
                                <FontAwesomeIcon icon={faCirclePlus} className="icon" />
                            </S.ProfileWrapper>
                        </label>
                        <input type="file" id="profile" style={{ display: "none" }} />
                    </S.LabelCentered>
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
