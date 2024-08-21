import styled from 'styled-components'
import theme from '../../global/theme'
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {}

/* MyPageMain.js */

    S.MypageNav = styled.nav`
        padding: 0.5rem;
        text-align: right;
         
        & svg {
            font-size: 1.5rem;
            cursor: pointer;
        }
    `
    S.ProfileContaier = styled.div`
        width: 100%;
        padding: 1.5rem 1.25rem;
    `
    S.ProfilePictureWrapper = styled.div`
        display: flex;
        justify-content: center;
        & .pictureBox{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    `
    // profile
    S.LabelCentered = styled.label`
    ${flexCenterColumn}
    & p {
        margin-left: 4px;
        margin-bottom: 4px;
        color: ${theme.PALETTE.white};
        font-family: "NanumSquareRound";
    }
    `;

    S.ProfileWrapper = styled.div`
    margin-top: 20px;
    ${flexCenter}
    width: 140px;
    height: 140px;
    position: relative;

    & .icon {
        width: 24px;
        height: 24px;
        right: 20px;
        bottom: 20px;
        position: absolute;
        color: ${theme.PALETTE.white};
        cursor: pointer;
    }
    `;

    S.ProfileImgWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `;

    S.ProfileNameWrapper = styled.div`
        text-align: center;
        padding: 1.25rem 0;

        & h3 {
            font-size: ${theme.FONT_SIZE.h3};
            font-weight: bold;
        }
    `

    S.ProfileStatusWrapper = styled.div`
        text-align: center;
        padding: 0 0 1.25rem 0;
    `

    S.ProfileContentsWrapper = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 1.25rem;
        background-color: ${theme.PALETTE.white};
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.25);
        
        & > div{
            padding: 1.125rem;
            text-align: center;

            & p{
                font-size: ${theme.FONT_SIZE.p};
                padding: 0 0 1.875rem 0;
            }

            & h3 { 
                font-size: ${theme.FONT_SIZE.h3};
                font-weight: bold;
                padding: 0 0 1.25rem 0;
            }
        }
        
        & .border{
            height: 100%;
            padding: 1px;
            display: flex;
            justify-content: center;
            align-items: center;

            & div{
                width: 2px;
                height: 100px;
                background-color: #eee;
            }
        }
    `
    S.ServiceContainer = styled.div`
        width: 100%;
    `
    S.ServiceWrapper = styled.div`
        width: 100%;
        padding: 1rem ;
        border-top: 1px solid ${theme.PALETTE.white};
        border-bottom: 1px solid ${theme.PALETTE.white};
            & a{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        & button{
            width:100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: none;
            background: none;
            box-shadow: none;
            cursor: pointer;
            & p {
                font-size: 16px;
                font-family: 'Pretendard-Regular';
            }
        }
        & .secession { 
            color: ${theme.PALETTE.error.red};
        }
        & svg{
            font-size: 1.5rem;
            & path{
                color: #fff;
            }
        }
    `
/* MyPageEdit.js */

        S.Form = styled.form`
            width: 100%;
            height: 100%;
        `
        
        S.PageTitle = styled.div`
            text-align: center;
            padding: 2.5rem 0;

            & h2 {
                font-family: 'NanumSquareRound';
                font-size: ${theme.FONT_SIZE.h2};
            }

            & .secession {
                color: ${theme.PALETTE.error.red};
                font-weight: bold;
            }
        `

        S.InputContainer = styled.div`
            width: 100%;
            padding: 2.5rem 50px;
        `
        S.InputWrapper = styled.div`
            width: 100%;
            padding: 0 0 1.5rem 0;
            
            & p { 
                padding: 0 0 0.5rem 0;
            }

            & input{
                width: 100%;
            }
        `
        S.Label = styled.label`
            width:100%;
            height: 100%;;
        `
        S.ConfirmMessageWrapper = styled.div`
            width: 100%;
            height: auto;
        `
        S.ConfirmMessage = styled.p`
            font-size: 12px;
            padding: 0.8rem 0 0 0 !important;
        `

        S.buttonWrapper = styled.div`
            width: 100%;
            text-align: center;
            padding: 0 0 4rem 0;
        `

/* termsOfUse.js */

    S.ScrollContainer = styled.div`
        width: 320px;
        height: 320px;
        margin: 0 auto;
        padding: 24px;
        border-radius: 20px;
        overflow-y: scroll;
        background-color: ${theme.PALETTE.white};

        & p {
            line-height: 1.5;
        }
    `    

/* Secession */

    S.SecessionCon = styled.div`
        width: 100%;
        text-align: center;
        
        & p {
            padding: 20px 0;
        }

        & div { 
            width: fit-content;
            margin: 0 auto;
            padding: 0 0 50px 0;
            text-align: left;
        }
    `
export default S;