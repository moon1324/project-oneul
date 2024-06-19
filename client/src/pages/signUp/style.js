import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

S.Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${theme.PALETTE.white};
    ${flexCenter}
`;

S.Wrapper = styled.div`
    width: 360px;
    height: 640px;
    background-image: url(${process.env.PUBLIC_URL}/global/images/background.png);
    ${flexCenterColumn}
    position: relative;
`;

S.BackWrapper = styled.div`
    width: 36px;
    height: 36px;
    position: absolute;
    ${flexCenter}
    left: 0;
    top: 0;
    .icon {
        font-size: 24px;
        path {
            color: ${theme.PALETTE.white};
        }
    }
`;

S.LogoWrapper = styled.div`
    width: 120px;
    height: 90px;
    ${flexCenter}
    margin: 60px 0px;
    margin-left: 34px;
    & img {
        width: 100%;
    }
`;

S.ContentContainer = styled.div`
    width: 100%;
    height: 330px;
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & button {
        margin: 22px 0px;
    }
`;

S.Label = styled.label`
    /* margin-bottom: 22px; */
    & p {
        margin-left: 4px;
        margin-bottom: 4px;
        color: ${theme.PALETTE.white};
        font-family: "NanumSquareRound";
    }
`;

S.ConfirmMessageWrapper = styled.div`
    width: 100%;
    height: 22px;
    background-color: transparent;
`;

S.ConfirmMessage = styled.span`
    font-size: 12px;
    color: ${theme.PALETTE.error.yellow};
    .icon {
        font-size: 12px;
        margin-right: 4px;
        path {
            color: ${theme.PALETTE.error.yellow};
        }
    }
`;

// profile
S.LabelCentered = styled.label`
    ${flexCenterColumn}
    & p {
        margin-left: 4px;
        margin-bottom: 4px;
        color: ${theme.PALETTE.white};
        font-family: "NanumSquareRound";
    }
`;

S.ProfileWrapper = styled.div`
    margin-top: 20px;
    ${flexCenter}
    width: 140px;
    height: 140px;
    position: relative;

    & .icon {
        width: 24px;
        height: 24px;
        right: 20px;
        bottom: 20px;
        position: absolute;
        color: ${theme.PALETTE.white};
    }
`;

S.ProfileImgWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

// Origin
S.CheckboxContainer = styled.div`
    ${flexCenterColumn}
    margin-top: 20px;
    width: 320px;
    height: 160px;
    border-radius: 20px;
    background-color: ${theme.PALETTE.skyblue};
`;

S.CheckboxRowContainer = styled.div`
    ${flexCenter}
`;

S.CheckboxRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 120px;
    height: 120px;
    & input {
        border: none;
    }
`;

S.CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 12px 0px;
    & p {
        margin: 0 4px;
        font-size: 12px;
    }
`;

// Success
S.ImgWrapper = styled.div`
    ${flexCenterColumn}
`;

S.H3 = styled.h3`
    margin-top: 28px;
    color: ${theme.PALETTE.white};
    font-size: ${theme.FONT_SIZE.h3};
    height: ${theme.FONT_LINE.h3};
`;

S.ButtonContainer = styled.div`
    margin: 0px 50px;
    margin-bottom: 56px;
`;

export default S;
