import React from 'react';
import './_button.scss';

const Button = ({ text, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>{text}</button>
    );
};

export default Button;