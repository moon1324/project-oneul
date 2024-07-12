import styled from 'styled-components'
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {}
    S.BannerContainer = styled.div`
        width: 100%;
        height: 100vh;
        ${flexCenter}
        & #banner1_wrapper{
            background-color:#C9DAF3 ;
        }
        & #banner2_wrapper{
            background-color:#D6B5D9;
        }
        & #banner3_wrapper{
            background-color:#B5D9D5;
        }
        & #banner4_wrapper{
            background-color:#B5C4D9;
        }
        & #banner5_wrapper{
            background-color:#D9B5B5;
        }
    `
S.BannerWrapper = styled.div`
    position:relative;
    width: 360px;
    height: 640px;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    & .faCircleXmark{
        display:block;
        position:relative;
        left:325px;
        top:10px;
        z-index:9;
        font-size: 25px;
        path{
            color:#555657;
        }
    }
`
S.BannerImageBox = styled.div`
    position:relative;
    width: 100%;
    & img{
        width: 100%;
    }
    & #banner4_text{
        position:absolute;
        top:45px;
        right:20px;
        font-weight:600;
        color:white;
        font-family: Arial, Helvetica, sans-serif;
    }
`
S.BannerConBox = styled.div`
    width: 100%;
    padding:20px;
    line-height: 1.5;
    & h3{
        font-weight:bold;
        font-style: italic;
    }
    & .boldText{
        font-weight: bold;
        text-align: center;
    } 
    & .TitleText{
        font-size:20px;
        font-weight: bold;
        text-align: center;
    } 
`
//---------------banner2-----------------

S.IconImageTitle=styled.div`
    margin-top:50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height:1;
    padding-bottom: 10px;
    color: white;
    & .smallIcon{
        path{
            color:white;
        }
    }
`
S.ImageWrapper = styled.div`     
    ${flexCenterColumn} ;
    width: 100%;     
    height: 250px;
    position:relative;   
    background-color:white;
    border: 2.5px solid #C080BC;
        padding:10px;
        border-radius: 0.8rem;
        box-shadow: 0 8px 5px -5px gray,
                    -5px 0 5px -5px gray, 
                    5px 0 5px -5px gray;
    & .icon{
        width:250px;
        height:250px;
        position:absolute;
        top:0px;
        path{
            color:rgba(192, 128, 188, 0.15)
        }
    }
    & .textIntoImage{
        position: absolute;
    }
`

//---------------banner3-----------------

S.QuestionWrapper=styled.div`
    ${flexCenter};
    padding-bottom:10px;
    padding-top:50px;
    .cloudMoonIcon{
        path{
            color: #5487d3;
        }
    }
    & p {
        font-family: 'NanumSquareRound';
        font-size:16px;
        color:#142146;
    }
`
S.TextWrapper=styled.div`
    width: 320px;
    height:270px;
    & div{
        background-color: white;
        width:100%;
        height:100%;
        font-family: 'NanumSquareRound';
        font-size:14px;
        border:none;
        padding:10px;
        border-radius: 0.8rem;
        box-shadow: 0 8px 5px -5px gray,
                    -5px 0 5px -5px gray, 
                    5px 0 5px -5px gray;
    }
`

//---------------banner4-----------------

S.banner4_ImageWrapper=styled.div`
    & img{
        position:relative;
        width:344px;
        right:21px;
    }
`
S.banner4_textWrapper=styled.div`
    border:2px dashed black;
    margin-top:10px;
    padding:5px;
`

//---------------banner5-----------------

S.SmallImageWrapper=styled.div`
    ${flexCenter};
    & img{
        width:50px;
    }
    & div{
        padding-left: 5px;
    }

`
S.BigImageWrapper=styled.div`
    padding-top:20px;
    & img{
        width:100%;
    }
    & div{
        
    }
    & .appTitle{
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }

`
//---------------bannerMain-----------------

export const SliderContainer = styled.div`
    .slick-dots li button:before {
    color:lightgray;
    opacity: 1;
    }
    .slick-dots li.slick-active button:before {
    color: black; 
    }
`;

export default S;