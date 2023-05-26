import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const PrivateRouters = ({children}) => {
   
    
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from: location }} replace></Navigate>
};

export default PrivateRouters;