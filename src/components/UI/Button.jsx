import React from 'react';
import styled from 'styled-components';

const Button = ({onClick,color,children}) => {
    return (
        <StyledButton style={{background: `${color}`}} onClick={onClick} color={color}>{children}</StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    padding: 10px 1rem;
    margin: 5px;
    background-color: #1dad8c;
    font-size: 18px;
    color: white;
    border: none;
    border-radius: 12px;

`