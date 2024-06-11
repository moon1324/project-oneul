import React from 'react';
import {Outlet } from 'react-router-dom';

const Calendar = () => {
  return (
    <div>
        <Outlet/>
    </div>
  );
};

export default Calendar;