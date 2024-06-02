import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
import theme from "../../global/theme";

const S = {};

S.contentButtonWrapper = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
`;

S.buttonsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 44px;
    & .activeTab {
        color: #5487D3;
        border-bottom: 4px solid #5487D3;
    }
`

S.dayButtonWrapper = styled.div`
    width: 100px;
    height: 44px;
    display : flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`


S.writingButtonWrapper = styled.div`
    width: 120px;
    height: 44px;
    margin: 0 16px 0 auto;
`;

S.writingButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: #4D4E89;
    color: #FFF;
    border: none;
`;

S.cardPostWrapper = styled.div`
    width: 320px;
    height: 320px;
    background-color: #FFF;
    border-radius: 20px;
    margin: 0 auto;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    ${flexCenterColumn}
`

S.postProfileContainer = styled.div`
    width : 100%;
    height: 20%;
    border-bottom: 1px solid #EEE;
    display: flex;
    align-items: center;
`

S.ThumbnailWrapper = styled.div`
    width: 36px;
    height: 36px;
    margin-left: 16px;
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

S.userNameWrapper = styled.div`
    font-weight: ${theme.FONT_WEIGHT.regular};
    margin-left: 20px;
`


S.postContentWrapper = styled.div`
    width : 100%;
    height: 65%;
`

S.reactionContainer = styled.div`
    width: 100%;
    height: 15%;
    border-top: 1px solid #EEE;
    display: flex;
    align-items: center;
`

S.reactionWrapper = styled.div`
    width: 100%;
    height: 15%;
    ${flexCenter}
`

S.commentContainer = styled.div`
    width: 20%;
    height: 20px;
    margin-right: auto;
    display: flex;
    align-items: center;
    & .comment path{
        color: #BEC1C5;
        font-size: 18px;
        cursor: pointer;
    }
    & .comment:hover path{
        color: #555657;
        font-size: 18px;
        cursor: pointer;
    }
`

S.commentWrapper = styled.div`
    margin-left: 16px;
`

S.emotionContainer = styled.div`
    width: 80%;
    height: 20px;
    display: flex;
    align-items: center;
`

S.emotionWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    margin-left: auto;
    & .heart path{
        color: #FF0000;
        font-size: 18px;
        cursor: pointer;
    }
    & .thumbsUp path{
        color: #0057FF;
        font-size: 18px;
        cursor: pointer;
    }
    & .smile path{
        color: #FDD608;
        font-size: 18px;
        cursor: pointer;
    }
    & .sad path{
        color: #0094FF;
        font-size: 18px;
        cursor: pointer;
    }
    & .angry path{
        color: #A50FEC;
        font-size: 18px;
        cursor: pointer;
    }
`    

S.emotionList = styled.li`
    margin-right: 16px;
    padding: 0;
`

S.reactionCountWrapper = styled.div`
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`


export default S;