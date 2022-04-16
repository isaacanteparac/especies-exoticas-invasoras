import React , {createContext, useState}from "react";
import {postFetch} from "../lib/crud_fetch";

export const AuthContext = createContext();


export const Context = ({children}) => {
  const initial={
    isLogin:false
  }

  const [auth, setAuth] = useState(initial);

  const login = async (username, password) => {
    const data = {username, password}
    const resp = await postFetch("users/verify-user", data);
  };

  return(
      <>
        <AuthContext.Provider value={{auth, login}}>
            {children}
        </AuthContext.Provider>
      </>
      
  );
}

