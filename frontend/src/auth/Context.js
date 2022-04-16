import React, { createContext, useState } from "react";
import { postFetch } from "../lib/crud_fetch";

export const AuthContext = createContext();

export const Context = ({ children }) => {
  const initial = {
    isLogin: false,
    idUser: null,
    email: null,
    username: null,
    name: null,
    lastname: null,
  };

  const [auth, setAuth] = useState(initial);

  const login = async (username, password) => {
    const data = { username, password };
    const resp = await postFetch("users/verify-user", data);
    if (resp.ok) {
      const { user } = resp;
      setAuth({
        isLogin: true,
        idUser: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        lastname: user.lastname,
      });
    }
    return resp.ok;
  };

  const signup = async (name, lastname, email, username, password) => {
    const data = { name, lastname, email, username, password };
    const resp = await postFetch("users", data);
    console.log(resp.ok);
    alert(data)
  };

  return (
    <>
      <AuthContext.Provider value={{ auth, login, signup }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
