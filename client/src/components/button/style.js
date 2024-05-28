import styled, { css } from "styled-components";

const variantCSS = {
    skyblue: css`
        background-color: ${({ theme }) => theme.PALETTE.skyblue};
    `,
    indigo: css`
        background-color: ${({ theme }) => theme.PALETTE.indigo};
    `,
    red: css`
        background-color: ${({ theme }) => theme.PALETTE.error["red"]};
    `,
    disabled: css`
        background-color: ${({ theme }) => theme.PALETTE.disabled};
    `,
    hoverSkyblue: css`
        background-color: ${({ theme }) => theme.PALETTE.hover["skyblue"]};
    `,
    hoverIndigo: css`
        background-color: ${({ theme }) => theme.PALETTE.hover["indigo"]};
    `,
    hoverRed: css`
        background-color: ${({ theme }) => theme.PALETTE.hover["red"]};
    `,
};

const borderCSS = {
    defalut: css`
    `,
    hoverSkyblue: css`
        border: 2px #5487d3 solid;
    `,
    hoverIndigo: css`
        border: 2px #4d4e89 solid;
    `,
    hoverRed: css`
        border: 2px #ee6161 solid;
    `,
};

const sizeCSS = {
    small: css`
        width: 100px;
        height: 44px;
    `,
    medium: css`
        width: 120px;
        height: 44px;
    `,
    large: css`
        width: 260px;
        height: 44px;
    `,
};

const colorCSS = {
    white: css`
        color: #fff;
    `,
    hoverSkyblue: css`
        color: #5487d3;
    `,
    hoverIndigo: css`
        color: #4d4e89;
    `,
    hoverRed: css`
        color: #ee6161;
    `,
};

const Button = styled.button`
    ${({ variant }) => variantCSS[variant]}
    ${({ border }) => borderCSS[border]}
    ${({ size }) => sizeCSS[size]}
    ${({ color }) => colorCSS[color]}

    cursor: pointer;
`;

export default Button;
