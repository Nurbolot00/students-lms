import React from 'react';
import {NavLink} from 'react-router-dom'


const Anouncements = () => {
    return (
        <NavLink to='/anouncements' 
        style={({isActive}) => ({
            color: isActive ? 'white' : '#5f6a7d',
            background: isActive ? 'violet' : 'white'
        })}>
            Anouncements
        </NavLink>
    );
};

export default Anouncements;