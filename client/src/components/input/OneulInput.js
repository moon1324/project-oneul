import React, { forwardRef } from 'react';
import Input from "./style";

const OneulInput = forwardRef((props,ref) => {
    // variant = {variant} size = {size}
    return <Input ref={ref} {...props} />;
});

export default OneulInput;


