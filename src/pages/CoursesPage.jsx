import React from 'react';
import Header from '../components/Header';
import {Outlet} from 'react-router-dom'
import styled from 'styled-components';


const CoursesPage = () => {
    
    return (
        <Container>
            <Header/>
            <Outlet/>
        </Container>
    );
};

export default CoursesPage;


const Container = styled.div`
background-color: #ccc8c8;
width: 100%;
`