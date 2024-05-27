import styled from 'styled-components'

const S = {}
    S.Wrapper = styled.div`
        width: 100%;
        padding: 0 1.25rem;
        margin: 2.5rem 0;

        & div {
            width: 100%;

            & .header{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            & .body{
                width: 100%;
            }


        }
    ` 

// Box writing mymind

    S.BoxWritingMymind = styled.div`
        position: relative;
        border-radius: 1.25rem;
        background: linear-gradient(#5587D3, #C080BC);
        font-family:  'NanumSquareRound';
        color: #fff;
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.25);
        
        & p {
                color: #fff;
            }
    `

    S.Contents = styled.div`
        background-image: url('/images/main/background_star.svg');
        
        & .header {
            padding: 1rem;
            border-bottom: 1px solid #fff;
        }
        
        & .body {
            padding: 1.5rem;
        }

    `
    S.DateBox = styled.div`
        text-align: left;
    `
    S.IconBox = styled.div`
        text-align: right;
        & svg{
                & path{
                    color :#fff;
                }
            }
    `

    S.DialogBox = styled.div`
        text-align: center;

        & p {
            text-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        }

        & p:first-child{
            padding: 0 0 1rem 0;
        }
    `

//box for our today

    S.BoxForOurToday = styled.div`
        & h4, p { 
            font-weight: bold;
        }
        & .header p{
            font-size: 14px;
        }
    `
    
export default S;