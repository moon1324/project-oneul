import React from 'react';
import { Outlet } from 'react-router-dom';

const MyMind = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default MyMind;

