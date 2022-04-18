
import React, { createContext, useState } from "react";
import { notoken } from "../helpers/crud_fetch";

export const AuthContext = createContext();

export const Context = ({ children }) => {
  const initial = {
    isLogin: false,
    id: null,
    email: null,
    username: null,
    name: null,
    lastname: null,
  };

  const [auth, setAuth] = useState(initial);

  const login = async (username, password) => {
    const data = { username, password };
    const resp = await notoken("users/auth/verification", data, "POST");
    if (resp.ok) {
      const { user } = resp;
      setAuth({
        isLogin: true,
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        lastname: user.lastname,
      });
    }
    return resp.ok;
  };

  const sign_up = async (name, lastname, email, username, password) => {
    const data = { name, lastname, email, username, password };
    const resp = await notoken("users/auth/create", data, "POST");
    if (resp.ok) {
      const { user } = resp;
      setAuth({
        isLogin: true,
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        lastname: user.lastname,
      });
      return true;
    }
    return resp.ok;
  };

  return (
    <>
      <AuthContext.Provider value={{ auth, login, sign_up }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
