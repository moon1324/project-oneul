import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
import theme from "../../global/theme";


const S={};

S.Form=styled.form`
    width:100%;
    height:100%
`


S.Wrapper = styled.div`
    width: 100%;
    height: 640px;
    background-color: #edf3fa;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
`;

S.Background = styled.div `    
    width: 100%;
    height: 100vh;     
    background-color: ${theme.PALETTE.white};     
    ${flexCenter} ;
`  
    
S.ImageWrapper = styled.div`     
    width: 100%;     
    height: 100%;     
    background-image: url(${process.env.PUBLIC_URL}/global/images/background.png);     
    /* ${flexCenterColumn} ; */
    text-align: center;
    `
S.TitleWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top:40px;
    
    & p {
        font-size:26px;
        color:#142146;
        font-family: 'NanumSquareRound' ;
        /* padding-top:50px; */
    }
`

S.DivNumberButtonWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
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
     }
    
`

S.DivWrapper=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & div{
        height: 2.5px;
        width: 20px;
        border:none;
        background-color: white;
        box-shadow: none;
        
     }
`

S.QuestionWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
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
        
    }

`

S.TextAreaWrapper=styled.div`
    /* display:flex;
    justify-content: center;
    align-items: center; */
    width: 320px;
    height:270px;

    & textarea{
        /* display:block; */
        width:100%;
        height:100%;
        resize:none;
        border:none;
        /* box-sizing: border-box; */
        border-radius: 0.8rem;
        box-shadow: 0 8px 5px -5px gray,
                    -5px 0 5px -5px gray, 
                    5px 0 5px -5px gray;
    }
    & textarea:focus {
        outline-color: #5487d3;
    }
    & textarea::placeholder {
        line-height: 270px;
        text-align: center;
        
    }
`

S.LastTextAreaWrapper=styled.div`
    display:flex;
    position:relative;
    top:30px;
    justify-content: center;
    align-items: center;
    width: 320px;
    height:120px;

    & textarea{
        /* display:block; */
        width:100%;
        height:100%;
        resize:none;
        border:none;
        /* box-sizing: border-box; */
        border-radius: 0.8rem;
        box-shadow: 0 8px 5px -5px gray,
                    -5px 0 5px -5px gray, 
                    5px 0 5px -5px gray;
    }
    & textarea:focus {
        outline-color: #5487d3;
    }
    & textarea::placeholder {
        line-height: 120px;
        text-align: center;
        
    }
`

S.FaceIconWrapper=styled.div`
position:relative;
    display:flex;
    width: 320px;
    height:120px;
    background-color:white;
    border:none;
    border-radius: 0.8rem;
    box-shadow: 0 8px 5px -5px gray,
                -5px 0 5px -5px gray, 
                5px 0 5px -5px gray;

    & textarea:focus {
        outline-color: #5487d3;
    }
    
`
S.FaceTextWrapper=styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    /* 텍스트를 줄 바꿈하지 않고 한 줄에 계속 표시 */
    white-space:noWrap;
    padding-right:14px;
    padding-left: 14px;
    width:100%;
    height:100%;
    & .faceIcon{
            width:25px;
            height:25px;
            padding-bottom: 3px;
            
            
        path{
            
            width:25px;
            height:25px;
            color: #5487d3;
        }
    }
    
    & div{
        font-size:12px;
        font-family: 'NanumSquareRound' ;
        

    }
`
S.GroupA=styled.div`
    display:flex;
    /* position: relative;
    top:-25px;
    right:-7px; */
    position: absolute;
    top:14px;
    left:7px;
`
S.GroupB=styled.div`
    display:flex;
    /* position: relative;
    top:30px;
    right:293px; */
    justify-content: space-evenly;
    align-items: space-evenly;
    position: absolute;
    top:70px;
    left:12px;
    
`

S.GoToWriteButtonWrapper=styled.div`
    position: relative;
    top:337px;
`
S.NextButtonWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top:35px;
    
`
S.SaveButtonWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top:35px;
    position:relative;
    top:30px;
`

S.p_text=styled.p`
    padding:30px;
    position: relative;
    z-index: 3;
`

/* const BackgroundImage=styled.div`
    /* background-image:url(../../../public/global/images/background.png) ; */
    /* background-image: url('./background.png'); */
    /* background-repeat: no-repeat; */
    /* background-position: top center; */
    /* background-size: cover; */
    /* background-attachment:fixed; */
     
export default S;

