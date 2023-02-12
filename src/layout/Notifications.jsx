import React from 'react';
import {NavLink} from 'react-router-dom'

const Notifications = () => {
    return (
        <NavLink to='/notifications' 
        style={({isActive}) => ({
            color: isActive ? 'white' : '#5f6a7d',
            background: isActive ? 'violet' : 'white'
        })}>
            Notifications
        </NavLink>
    );
};

export default Notifications;