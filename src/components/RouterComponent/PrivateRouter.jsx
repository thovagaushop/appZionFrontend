import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({isLogged, children}) => {

    if (!isLogged) {
        return (
            <Navigate to="/login" replace />
        )
    }
    return (
        children
    )
}

export default PrivateRouter