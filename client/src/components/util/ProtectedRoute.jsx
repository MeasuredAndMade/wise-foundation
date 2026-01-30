import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const token = localStorage.getItem('x-access-token')
    console.log(props.isAuth)
    return (
       token ? <Outlet /> : <Navigate to='/login' />
    );
};

export default ProtectedRoute;