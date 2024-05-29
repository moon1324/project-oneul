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
    display: flex;
    flex-direction: column;
`;

// S.Twincle = styled.div`
//     background-image: url(${process.env.PUBLIC_URL}/global/images/twincle.png);
//     width: 100%;
//     height: 60%;
//     ${flexCenterColumn}
// `;

export default S;
