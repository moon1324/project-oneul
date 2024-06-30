import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
import theme from "../../global/theme";

const S={};

//---------------MyMindHome---------------

S.Background = styled.div `    
    width: 100%;
    height: 100vh;     
    background-color: ${theme.PALETTE.white};     
    ${flexCenter} ;
`  
S.ImageWrapper = styled.div`     
    width: 100%;     
    height: 570px;     
    background-image: url(${process.env.PUBLIC_URL}/global/images/background.png);     
    ${flexCenterColumn} ;
    text-align: center;
`
S.TitleWrapper=styled.div`
    ${flexCenter};
    padding-top:40px;
    & p {
        font-size:26px;
        color:#142146;
        font-family: 'NanumSquareRound' ;
    }
    & p#firstPage{
        position: relative;
        top:-35px;
        color:white;
    }
`
S.text01=styled.p`
    ${flexCenterColumn};
    position: relative;
    top:-30px;
    padding:40px;
    color:white;
    & .faHeartCircleCheck{
        width:200px;
        height:200px;
        padding-top: 20px;
        margin-top:51px;
        path{
            color:rgba(192, 128, 188, 0.6)
        }
    }
`
S.GoToWriteButtonWrapper=styled.div`
    position: relative;
    top:10px;
    /* line-height: 44px; */
    & #goToWrite{
        line-height: 44px;
    }
`
S.ErrorContainer=styled.div`
    ${flexCenterColumn};
    position: fixed;
    z-index:999;
    top:228px;
    /* padding:0px 10px; */
    width:320px;
    height:170px;
    background-color: white;
    border: 2.5px ridge #FFB342;
    border-radius: 20px;
    box-shadow: 0 8px 5px -5px gray,
                -5px 0 5px -5px gray, 
                5px 0 5px -5px gray;
`
S.ErrorTitle=styled.h3`
    position: absolute;
    top:15px;
    font-size: 20px;
    font-weight: 600;
`
S.ErrorTexts=styled.div`
    position: absolute;
    top:55px;
    & div{
        padding:0px 18px;
        text-align: center;
        color:#FFB342;
        
    }
`
S.OkButton=styled.div`
    display: flex;
    position: absolute;
    /* top:110px; */
    bottom:15px;
    & #okButton{
        line-height:44px;
    }
    
`

//---------------InMyMind(1~6)---------------

S.Wrapper = styled.div`
    ${flexCenterColumn};
    width: 360px;
    height: 570px;
    background-color: #edf3fa;
    position: relative;
    top:-13px;
`
S.DivNumberButtonWrapper=styled.div`
    ${flexCenter};
    padding-top:12px;
    & .active{
        & button{
            color:white;
            background-color: #C080BC;
            box-shadow: 0px 1px 2px 0.5px gray;
        }
    }
    & button{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border:none;
        font-size: 14px;
        color:#C080BC;
        background-color: white;
        box-shadow: none;
        cursor: pointer;
        font-family: 'NanumSquareRound' ;
    }
`
S.DivWrapper=styled.div`
    ${flexCenter};
    & div{
        height: 2.5px;
        width: 20px;
        border:none;
        background-color: white;
        box-shadow: none;
    }
`
S.QuestionWrapper=styled.div`
    ${flexCenter};
    padding-top:50px;
    /* padding-bottom:10px; */
    padding: 50px 20px 10px 20px;
    .cloudMoonIcon{
        path{
            color: #5487d3;
        }
    }
    & div {
        font-size:16px;
        color:#142146;
        font-family: 'NanumSquareRound';
     }
`
S.TextAreaWrapper=styled.div`
    width: 320px;
    height:270px;
    & textarea{
        width:100%;
        height:100%;
        resize:none;
        border:none;
        padding:10px 0px 10px 10px;
        border-radius: 0.8rem;
        box-shadow: 0 8px 5px -5px gray,
                    -5px 0 5px -5px gray, 
                    5px 0 5px -5px gray;
    }
    & textarea:focus {
        outline-color: #5487d3;
    }
    & textarea::placeholder {
        line-height: 250px;
        text-align: center;
        font-family: 'Pretandard-Regular';
    }
`
S.SaveButtonWrapper=styled.div`
    ${flexCenter};
    padding-top:35px;
    & #goToSave{
        line-height: 44px;
    }
`

//---------------InMyMind06---------------

S.LastPageWrapper=styled.div`
    position: relative;
    top:-15px;
`
S.AlertWrapper = styled.div`
    & p{
        color: white;
    }
    position:fixed;
    top:450px;
    background-color: #FFB342;
    padding: 10px;
    margin-top: 10px;
    width: 260px;
    height: 44px;
    text-align: center;
    line-height: 23px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

export default S;

