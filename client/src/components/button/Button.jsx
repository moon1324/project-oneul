import React from "react";
import Button from "./style";

const Button = ({ children, ...rest }) => {
    return <Button {...rest}>{children}</Button>;
};

export default Button;
