import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <ul>
                <li><NavLink to='materials'
                style={({isActive}) => ({
                    color: isActive ? '444' : 'white',
                    borderBottom: isActive ? '4px solid orange' : 'none'})}>Materials</NavLink></li>
                    <li><NavLink to='students'
                style={({isActive}) => ({
                    color: isActive ? '444' : 'white',
                    borderBottom: isActive ? '4px solid orange' : 'none'})}>Students</NavLink></li>
                    <li><NavLink to='ratings'
                style={({isActive}) => ({
                    color: isActive ? '444' : 'white',
                    borderBottom: isActive ? '4px solid orange' : 'none'})}>Ratings</NavLink></li>
            </ul>
        </HeaderContainer>
    );
};

export default Header;


const HeaderContainer = styled.nav`
    background-color: #2596be; 
    padding: 1.5rem;
    width: 100%;
    ul{
        display: flex;
        li{
            margin: 0 2rem;
            list-style: none;
            a{
                text-decoration: none;
                font-size: 22px;
                font-weight: 700;
            }
        }
    }

`