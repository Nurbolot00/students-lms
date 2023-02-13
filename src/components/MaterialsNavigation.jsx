import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MaterialsNavigation = () => {
    return (
        <NavigationContainer>
            <ul>
            <li>
            <NavLink
              to="submitted"
              style={({ isActive }) => ({
                color: isActive ? "#545e6f" : 'white',
                borderBottom: isActive ? "4px solid orange" : "#fefbfb",
              })}
            >
              Submitted
            </NavLink>
          </li>
          <li>
            <NavLink
              to="waiting"
              style={({ isActive }) => ({
                color: isActive ? "#545e6f" : 'white',
                borderBottom: isActive ? " 4px solid orange" : "#fefbfb",
              })}
            >
              Waiting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="late"
              style={({ isActive }) => ({
                color: isActive ? "#545e6f" : 'white',
                borderBottom: isActive ? "4px solid orange" : "#fefbfb",
              })}
            >
              Late
            </NavLink>
          </li>
            </ul>
        </NavigationContainer>
    );
};

export default MaterialsNavigation;

const NavigationContainer = styled.nav`
    background-color:   #59c2af; 
    padding: 1rem 1.5rem;
    margin: 0rem 2rem;
    width: 95%;
    ul{
        display: flex;
        li{
            margin: 0 2rem;
            list-style: none;
            a{
                text-decoration: none;
                font-size: 24px;
                font-weight: 700;
            }
        }
    }

`