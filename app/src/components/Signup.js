import React, { useState } from "react";
import { Input } from "../style/input";
import { Button } from "../style/button";

export default function Signup() {
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const url_api = "ruta de api";

  const data = {
    fullname,
    email,
    password,
  };

  /*function handleSubmit_(e){
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }*/

  fetch(url_api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("error", error))
    .then((res) => console.log("success", res));

  return (
    <div>
      <h1>Sign up</h1>
      <form /*onSubmit={handleSubmit_}*/>
        <div>
          <Input
            name="fullname"
            type="text"
            placeholder="Fullname"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
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
        <Button type="submit">Sing up</Button>
      </form>
    </div>
  );
}
