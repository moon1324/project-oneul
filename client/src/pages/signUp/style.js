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
    margin: 60px 0px;
    margin-left: 34px;
    & img {
        width: 100%;
    }
`;

S.ContentContainer = styled.div`
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & button {
        margin: 22px 0px;
    }
`;

S.ButtonContainer = styled.div`
    margin: 0px 50px;
    margin-bottom: 56px;
`;

export default S;
