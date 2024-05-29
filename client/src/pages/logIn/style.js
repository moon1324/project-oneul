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
`;

S.LogoWrapper = styled.div`
    width: 120px;
    height: 90px;
    ${flexCenter}
    margin-top: 60px;
    margin-bottom: 82px;
    margin-left: 34px;
    & img {
        width: 100%;
    }
`;

S.LoginForm = styled.form`
    width: 100%;
    height: 274px;
    ${flexCenterColumn}
    /* margin between password input and login button */
    & button {
        margin-top: 34px;
    }
`;

S.LoginLabel = styled.label`
    margin-bottom: 22px;
    & p {
        margin-left: 4px;
        margin-bottom: 4px;
        color: ${theme.PALETTE.white};
        font-weight: 100;
    }
`;

S.ToSignUp = styled.div`
    margin: 56px 50px;
`;

export default S;
