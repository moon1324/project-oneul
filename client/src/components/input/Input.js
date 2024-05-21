import React from "react";

const Input = ({ children, ...rest }) => {
    return <Input {...rest}>{children}</Input>;
};

export default Input;
