import React , {createContext, useState}from "react";


const AuthContext = createContext();
export const Context = ({children}) => {
  const auth={
    isLogin:false
  }
  
  return(
      <>
        <AuthContext.Provider value={auth.isLogin}>
            {children}
        </AuthContext.Provider>
      </>
      
  );
}
