import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
import Button from '../components/UI/Button';

const Ratings = () => {
    const navigate = useNavigate()
    const goBackHandler = () => {
        navigate(-1)
    }
    return (
        <Block>
            <h1>Rating Page</h1>
            <Button onClick={goBackHandler}>Go Back</Button>
        </Block>
    );
};

export default Ratings;

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    margin:  1rem;
    height: 80%;

`