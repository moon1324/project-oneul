import styled from 'styled-components';
import { flexCenter, flexCenterColumn } from "../../global/common";
const S = {};

//-----------------Calendar-----------------
S.TitleWrapper=styled.div`
    font-size: 26px;
    font-family: 'NanumSquareRound';
    padding:50px 0px;
    text-align: center;
    & #date{
        font-size:16px;
        margin-top: 5px;
    }
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
    position: relative;
    height:45px;
    margin:0px 16px;
    `
S.ArrowsWrapper=styled.div`
    & div{
        ${flexCenter};
        background-color: white;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        border-radius: 15px;
        width:62.4px;
        height: 27.2px;
        & div{
            background: none;
            width:0px;
        }
       & button{
        cursor: pointer;
        color:#555657;
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
    position:relative;
    & select {
        cursor: pointer;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        border:none;
        padding: 4px;
        font-size: 16px;
        border-radius: 15px;
        color:#555657;
        & option {
            cursor: pointer;
            padding: 4px;
            font-size: 16px;
            /* color: #142146; */
            color:#555657;

        }
    }
`
S.WeekWrapper=styled.div`
    font-family: 'NanumSquareRound';
    font-weight: 600;
    margin-top: 13px;
    & .week{
        display: flex;
        position: relative;
        padding-bottom:29px;
        justify-content: space-between;
        & .weekday{
            width: calc(100% / 7); 
            text-align: center;
        }
    }
`
S.DateWrapper=styled.div`
    font-family:'Pretandard-Regular';
    font-weight:600;
    & .date{
        position: relative;
        cursor: pointer;
        & .weekday{
            color:#555657;
            width: calc(100% / 7);
            float: left;
            text-align: center;
            height: 45px;
            position:relative;
        }
        & .weekday.hasData::after {
            content: ''; 
            position: absolute;
            width: 7px;
            height: 7px;
            background-color: #5487D3;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            margin-top: 10px;
            
        }
        & .weekday.today{
            /* background-color:#5487D3;
            color: white; */
            color:#5487D3;
            /* margin:0px 12.5px;
            margin-bottom: 25px;
            width:22px; 
            height:22px;
            border-radius: 50%;  */
        }
    }
`

// -------------CheckMyMind-----------------

S.Container=styled.div`
    height:100%;
    & .grayBackground{
        background-color: #8C9094;
        height:100%;
    }
`
 S.GrayBackground=styled.div`
    min-height: 570px;
    height:100%;
    .grayBackground{
        background-color: #8C9094;
        height:100%;
        min-height: 570px;
    }
`
S.CheckMyMindContainer=styled.div`
    position: relative; 
    min-height: 570px;
`
S.IconsWrapper=styled.div`
    position: relative;
    top:10px;
    font-size: 25px;
    & .faPenToSquare{
        position: absolute;
        left:10px;
        cursor: pointer;
        path{
            color:#555657;
        }
    }
    & .faTrashCan{
        position: absolute;
        left:45px;
        cursor: pointer;
        path{
            color:#555657;
        }
    }
    & .faCircleXmark{
        position: absolute;
        right:10px;
        path{
            color:#555657;
        }
    }
`
S.ContentWrapper=styled.div`
    display: flex;
    font-family: 'Pretandard-Regular';
    font-size: 14px;
    margin:0px 20px;
    padding-bottom: 20px;
    font-weight: 600;
    & .cloudMoonIcon{
        path{
            color:#5487D3;
        }
    }
    & div .answer{
        font-size: 14px;
        font-weight: 400;
        padding-top:5px;
        /* word-break: break-all; */
        font-family: 'Pretandard-Regular';
        line-height:1.5;
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
        line-height: 44px;
    }
`

//-----------ModifyMyMind-------------

S.PageContainer=styled.div`
    ${flexCenterColumn}
    position:relative;
    & .faCircleXmark{
        position: absolute;
        right:10px;
        top:10px;
        font-size:25px;
        cursor: pointer;
        path{
            color:#555657;
        }
        
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
        padding:10px 0px 10px 10px;
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
        /* font-family: 'Pretandard-Regular'; */
        font-family: 'NanumSquareRound';
        font-size:16px;
        color:#142146;
        
     }
`

//------------DeleteMyMind-------------------

S.DeletePageContainer=styled.div`
    ${flexCenterColumn};
`
S.DeleteContainer=styled.div`
    ${flexCenterColumn};
    position: fixed;
    z-index:999;
    top:228px;
    width:320px;
    height:170px;
    background-color: white;
    border: 2.5px ridge #EE6161;
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
    top:55px;
    & div{
        text-align: center;
        color:#EE6161;
    }
`
S.DeleteButtons=styled.div`
    display: flex;
    position: absolute;
    bottom:15px;
    & #button01{
        font-family: 'Pretandard-Regular';
        margin:0 20px;
    }
    & #button02{
        font-family: 'Pretandard-Regular';
        margin:0 20px;
    }
`
export default S;

