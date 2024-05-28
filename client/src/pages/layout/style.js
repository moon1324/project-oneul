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
    background-color: ${theme.PALETTE.hover.skyblue};
    display: flex;
    flex-direction: column;
    position: relative;
`;

// header
S.Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;

    /* S.headerContainer justify-content: space-between */
    & .active {
        justify-content: space-between;
    }
`;

S.HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: ${theme.PALETTE.white};
    position: relative;

    & .display-none {
        display: none;
    }

    /* S.SearchButton right: 20px -> 30px */
    & .active {
        right: 30px;
    }
`;

S.ProfileContainer = styled.div`
    ${flexCenter}
    width: 36px;
    height: 60px;
`;

S.ThumbnailWrapper = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: white;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    & img {
        width: 100%;
        border-radius: 50%;
    }
`;

S.WelcomeMessage = styled.h5`
    font-size: ${theme.FONT_SIZE.body};
    font-weight: ${theme.FONT_WEIGHT.regular};
    height: ${theme.FONT_LINE.body};
    margin-left: 20px;
`;

S.SearchButtonWrapper = styled.div`
    position: absolute;
    right: 20px;
    cursor: pointer;
    transition: right 0.3s ease-in-out;
`;

// main
S.Main = styled.main`
    flex: 1;
    overflow: hidden;
`;

// navigation
S.Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: ${theme.PALETTE.white};
    display: flex;
    position: absolute;
    bottom: 0;

    & a {
        font-size: 16px;
        text-align: center;
    }
    & .active {
        & p {
            color: ${theme.PALETTE.skyblue} !important;
        }
        & path {
            color: ${theme.PALETTE.skyblue} !important;
        }
    }
`;

S.NavWrap = styled.div`
    width: 72px;
    height: 70px;
    ${flexCenterColumn}
    & p {
        color: ${theme.PALETTE.black};
        font-size: 10px;
    }
    .icon {
        font-size: 24px;
        padding: 4px;
        path {
            color: ${theme.PALETTE.black};
        }
    }
`;

export default S;
