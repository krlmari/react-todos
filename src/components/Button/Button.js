import React from 'react';
import './Button.css';

function Button({ text, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled} className="button">
            {text}
        </button>
    );
}

export default Button;
