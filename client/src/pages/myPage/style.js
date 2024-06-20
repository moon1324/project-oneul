import styled from 'styled-components'
import theme from '../../global/theme'

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
            position: relative;
            width: 100px;
            height: 100px;
            overflow: hidden;

            & > img {
                width:100%;
                height: 100%;
                border-radius:50%;
                object-fit: cover;
            }
            
            & button {
                cursor: pointer;
                position: absolute;
                bottom: 0px;
                right: 0px;
                font-size: 26px;
                border:none;
                background-color: transparent;
                box-shadow: none;
            }
        }

        & .uploadBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 12px;
            right: 12px;
        }
    `

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
            padding: 0 0 1.25rem 0;
            
            & p { 
                padding: 0 0 0.5rem 0;
            }

            & input{
                width: 100%;
            }
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