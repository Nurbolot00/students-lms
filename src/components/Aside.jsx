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
    margin: 0;
    padding: 1rem;
    width: 25%;
    background-color: #c3cfd9;
    height: 100vh;
`

const LogoHeading = styled.h1`
    color: blueviolet;
    text-align: center;
    margin-bottom: 5rem;
    font-size: 40px;
`

const LayoutList = styled.ul`
    background-color: white;
    padding: 1rem;

    li{
        list-style: none;
        width: 100%;
        a{
            text-decoration: none;
            display: block;
            width: 100%;
            height: 100%;
            padding: 1.5rem;
            font-size: 20px;
            font-weight: 700;
        }
    }
`