import styled from 'styled-components';
import { flexCenter, flexCenterColumn } from "../../global/common";
const S = {};

//-----------------Calendar-----------------
S.TitleWrapper=styled.div`
    font-size: 26px;
    font-family: 'NanumSquareRound';
    padding:50px 0px;
    text-align: center;
`
S.CalendarContainer = styled.div`
  width: 360px;
  height: 450px;
  margin: auto;
  padding-left:20px;
  padding-right:20px;
  position: absolute;
  
`
S.CalendarHeadContainer=styled.div`
    display:flex;
    justify-content: space-between;
    padding-bottom:29px;
    position: relative;
    left:19px;
`
S.ArrowsWrapper=styled.div`
    padding-right:33px;
    & div{
        ${flexCenter};
        background-color: white;
        border: 0.8px solid gray;
        box-sizing: border-box;
        box-shadow: 0.5px 1px 0.1px 0.3px gray;
        border-radius: 15px;
        width:64px;
        height: 28.8px;
        & div{
            background: none;
            width:0px;
        }
       & button{
        cursor: pointer;
        color:#142146;
        font-size:15px;
        background: none;
        border: none;
        box-shadow:none;
        margin: 0px auto;
        height: 30px;
        position: relative;
        }
    }
`
S.SelectWrapper=styled.h3`
    font-family:'Pretandard-Regular';
    position:relative;
    & select {
        cursor: pointer;
        box-sizing: border-box;
        box-shadow: 0.5px 1px 0.1px 0.3px gray;
        padding: 4px;
        font-size: 16px;
        border-radius: 15px;
        & option {
            cursor: pointer;
            padding: 4px;
            font-size: 16px;
            color: #142146;
        }
    }
`
S.WeekWrapper=styled.div`
    font-family:'Pretandard-Regular';
    font-weight: 600;
    & .week{
        display: flex;
        position: relative;
        left:18.5px;
        padding-bottom:29px;
        & .weekday{
            width: calc(360px / 8);
        }
    }
`
S.DateWrapper=styled.div`
    font-family:'Pretandard-Regular';
    font-weight: 600;
    & .date{
        position: relative;
        left:3.5px;
        cursor: pointer;
        & .weekday{
            width: calc(360px / 8);
            float: left;
            text-align: center;
            height: 45px;
        }
        & .today{
            background-color:#5487D3;
            color: white;
            margin:0px 12.5px;
            margin-bottom: 25px;
            width:20px; 
            height:20px;
            border-radius: 50%; 
        }
    }
`

// -------------CheckMyMind-----------------

S.CheckMyMindContainer=styled.div`
    position: relative;
    
    & div.grayBackground{
        background-color: #8C9094;
    }
`
 
S.IconsWrapper=styled.div`
    position: relative;
    top:7px;
    font-size: 22px;
    & .faPenToSquare{
        position: absolute;
        left:7px;
    }
    & .faTrashCan{
        position: absolute;
        left:33px;
        cursor: pointer;
    }
    & .faCircleXmark{
        position: absolute;
        right:7px;
    }
`
S.ContentWrapper=styled.div`
    display: flex;
    font-size: 16px;
    margin:0px 32.5px;
    padding-bottom: 20px;
    & .cloudMoonIcon{
        path{
            color:#5487D3;
        }
    }
    
    & div .answer{
        font-size: 12px;
        word-break: break-all;
    }
`
S.ButtonWrapper=styled.div`
    ${flexCenterColumn};
    & .modifyButton{
        margin-bottom: 20px;
    }
    & .deleteButton{
        margin-bottom: 37px;
    }
    & .completedModifyButton{
        margin: 37px 0px;
    }
`

//-----------ModifyMyMind-------------

S.PageContainer=styled.div`
    ${flexCenterColumn}
    position:relative;
    & .faCircleXmark{
        position: absolute;
        right:7px;
        top:7px;
        font-size:22px;
    }
`
S.QuestionsWrapper=styled.div`
    margin-top: -50px;
`
S.TextAreaWrapper=styled.div`
    width: 320px;
    height:270px;
    & textarea{
        width:100%;
        height:100%;
        resize:none;
        border:none;
        padding:10px;
        border-radius: 0.8rem;
        box-shadow: 0 8px 5px -5px gray,
                    -5px 0 5px -5px gray, 
                    5px 0 5px -5px gray;
    }
    & textarea:focus {
        outline-color: #5487d3;
    }
`
S.QuestionWrapper=styled.div`
    ${flexCenter};
    padding-top:50px;
    padding-bottom:10px;
    .cloudMoonIcon{
        path{
            color: #5487d3;
        }
    }
    & p {
        font-size:16px;
        color:#142146;
        font-family: 'NanumSquareRound';
     }
`

//------------DeleteMyMind-------------------

S.DeletePageContainer=styled.div`
    ${flexCenterColumn};
    /* background-color: #8C9094; */
    /* width:360px;
    height:570px; */
    background-color: rgba(0,0,0,0.4);
`
S.DeleteContainer=styled.div`
    ${flexCenterColumn};
    position: fixed;
    z-index:999;
    top:240px;
    width:320px;
    height:170px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 8px 5px -5px gray,
                -5px 0 5px -5px gray, 
                5px 0 5px -5px gray;

`
S.DeleteTitle=styled.h3`
    position: absolute;
    top:15px;
    font-size: 20px;
    font-weight: 600;
`
S.DeleteTexts=styled.div`
    position: absolute;
    top:60px;
    & div{
        text-align: center;
        color:#EE6161;
    }
`
S.DeleteButtons=styled.div`
    display: flex;
    position: absolute;
    top:115px;
    & #button01{
        margin:0 20px;
    }
    & #button02{
        margin:0 20px;
    }
`
export default S;

