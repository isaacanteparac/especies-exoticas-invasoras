import React , {createContext, useState}from "react";


export const AuthContext = createContext();
export const Context = ({children}) => {
  const auth={
    isLogin:true
  }
  
  return(
      <>
        <AuthContext.Provider value={{auth}}>
            {children}
        </AuthContext.Provider>
      </>
      
  );
}
