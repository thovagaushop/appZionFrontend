import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthentedComponent = ({isLogged, children}) => {

    if (isLogged) {
        return (
            <Navigate to="/home" replace />
        )
    }
    return (
        children
    )
}

export default AuthentedComponent