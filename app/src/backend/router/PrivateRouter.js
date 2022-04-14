import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {Context} from '../../auth/Context';


export const PrivateRouter = ({children}) =>{
const auth = useContext(Context);


  return auth? children:<Navigate to="/free"/>;
      
}

