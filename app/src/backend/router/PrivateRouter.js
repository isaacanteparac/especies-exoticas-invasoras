import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {Context} from '../../auth/Context';


export const PrivateRouter = ({children}) =>{
const {auth_} = useContext(Context);


  return auth_.isLogin? children:<Navigate to="/free"/>;
      
}

