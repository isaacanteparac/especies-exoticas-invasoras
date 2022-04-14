import React , {createContext, useState}from "react";


const AuthContext = createContext();
export const Context = ({children}) => {
  const initial={
    isLogin:false
  }
  const [auth, setAuth] = useState(initial);
  return(
      <>
        <AuthContext.Provider value={{auth}}>
            {children}
        </AuthContext.Provider>
      </>
      
  );
}
