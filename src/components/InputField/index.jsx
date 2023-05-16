import React from 'react';
import './index.css'
import { TextField } from '@mui/material';

function InputField(props) {
    return (
        <div className='input-field'>
            <TextField 
                id={props.id} 
                label={props.label} 
                variant={props.variant} 
                InputProps = {props.InputProps}
                sx={{
                    width:"100%"
                }}
            />
        </div>
    );
};

export default InputField

