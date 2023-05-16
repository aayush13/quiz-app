import React from "react";
import Button from '@mui/material/Button';

function InputButton(props) {
    return (
        <Button variant={props.variant}>{props.title}</Button>
    )
}

export default InputButton;
