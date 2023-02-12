import React from 'react';
import Anouncements from '../layout/Anouncements';
import Courses from '../layout/Courses';
import Notifications from '../layout/Notifications';
import Schedule from '../layout/Schedule';
import styled from 'styled-components'

const Aside = () => {
    return (
        <Container>
            <LogoHeading>Logo</LogoHeading>
                <LayoutList>
                    <li><Courses/></li>
                    <li><Anouncements/></li>
                    <li><Notifications/></li>
                    <li><Schedule/></li>
                </LayoutList>
        </Container>
    );
};

export default Aside;

const Container = styled.div`
display: flex;
flex-direction: column;
/* margin-bottom: 300px; */
    margin: 0;
    padding: 1rem;
    width: 25%;
    background-color: #c3cfd9;
    height: 100vh;
`

const LogoHeading = styled.h1`
    color: blueviolet;
    text-align: center;
`

const LayoutList = styled.ul`
    background-color: white;
    padding: 1rem;

    li{
        list-style: none;
    }
`