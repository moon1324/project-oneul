import React from "react";
import Button from "./style";

const Button = ({ children, ...rest }) => {
    // variant = {variant} border = {border} size = {size} color = {color}
    return <Button {...rest}>{children}</Button>;
};

export default Button;
