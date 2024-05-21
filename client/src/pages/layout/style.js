import styled from "styled-components";

const S = {};

S.Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

S.Wrapper = styled.div`
    width: 360px;
    height: 640px;
    background-color: #edf3fa;
    display: flex;
    flex-direction: column;
    position: relative;
`;

S.Main = styled.main`
    flex: 1;
    overflow: hidden;
`;

// S.Header = styled.header`
//     width: 100%;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     & a {
//         font-size: 24px;
//         font-weight: 600;
//         display: block;
//     }
// `;

S.Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    position: absolute;
    bottom: 0;

    & a {
        font-size: 16px;
        text-align: center;
    }
    & .active {
        & p {
            color: #5487d3 !important;
        }
        & path {
            color: #5487d3 !important;
        }
    }
`;

S.NavWrap = styled.div`
    width: 72px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
        color: #bec4c9;
        font-size: 10px;
    }
    .icon {
        font-size: 24px;
        padding: 4px;
        path {
            color: #142146;
        }
    }
`;

export default S;
