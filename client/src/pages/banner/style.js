import styled from 'styled-components'
import theme from '../../global/theme'

const S = {}
    S.BannerContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    S.BannerWrapper = styled.div`
        width: 460px;
    `

    S.BannerImageBox = styled.div`
        width: 100%;
        & img{
            width: 100%;
        }
    `
    S.BannerConBox = styled.div`
        width: 100%;
        text-align: center;

        & h2{
            font-size: ${theme.FONT_SIZE.h2};
            padding: 26px;
        }

        & p {
            line-height: 1.5;
            padding: 20px;
        }
    `


export default S;