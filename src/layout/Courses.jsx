import React from 'react';
import {NavLink} from 'react-router-dom'


const Courses = () => {
    return (
            <NavLink to='/courses/materials' 
            style={({isActive}) => ({
                color: isActive ? 'white' : '#5f6a7d',
                background: isActive ? 'violet' : 'white'
            })}>
                Courses
            </NavLink>
    );
};

export default Courses;