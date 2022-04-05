import React, { useState } from "react";
import { Button } from "../style/button";
import { Input } from "../style/input";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const url_api = "ruta de api";

  const data = {
    username,
    password,
  };

  fetch(url_api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json().cath((error) => console.error("error", error)))
    .then((res) => console.log("success", res));

  return (
    <div>
      <h1>Login</h1>
      <form /*onSubmit={handleSubmit_}*/>
        <div>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            name="password"
            type="password"
            placeholder="Passsword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
