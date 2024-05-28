import styled from 'styled-components'

const S = {}
    S.MypageNav = styled.nav`
        padding: 0.5rem;
        text-align: right;
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
            border-radius:50%;
        }
    `

export default S;