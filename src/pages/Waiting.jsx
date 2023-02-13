import React from 'react';
import styled from 'styled-components';

const Waiting = () => {
    return (
        <Block>
            <h1>Waiting Page</h1>
        </Block>
    );
};

export default Waiting;


const Block = styled.div`
    background-color: white;
    padding: 1rem;
    margin:  0 2rem;
`