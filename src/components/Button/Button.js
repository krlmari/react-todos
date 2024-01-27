import React from 'react';
import './Button.css';

function Button({ text, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;
