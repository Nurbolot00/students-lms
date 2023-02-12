import React from 'react';
import {NavLink} from 'react-router-dom'

const Schedule = () => {
    return (
        <NavLink to='/schedule' 
        style={({isActive}) => ({
            color: isActive ? 'white' : '#5f6a7d',
            background: isActive ? 'violet' : 'white'
        })}>
            Schedule
        </NavLink>
    );
};

export default Schedule;