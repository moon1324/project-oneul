import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

S.contentButtonWrapper = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
`;

S.dayButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 44px;
`

S.ourDayButtonWrapper = styled.div`
    width: 100px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

S.myDayButtonWrapper = styled.div`
    width: 100px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

S.writingButtonWrapper = styled.div`
    width: 120px;
    height: 44px;
    margin: 0 0 0 auto;
`;

S.writingButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: #4D4E89;
    color: #FFF;
    border: none;
`;

export default S;