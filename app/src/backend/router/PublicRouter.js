import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {Context} from '../../auth/Context';

export default function PublicRouter({children}){
   const {auth} = useContext(Context);
    return auth.isLogin? <Navigate to="/login"/>:children;
        
    

}

