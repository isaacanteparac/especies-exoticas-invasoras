import React, { useState } from "react";

export default function FormRegister() {
  const [fullname, set_fullname] = useState(null);
  const [email, set_email] = useState(null);
  const [password, set_password] = useState(null);
  const url_api = "ruta de api";

  const data = {
    fullname,
    email,
    password
  };

  /*function handleSubmit_(e){
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }*/

  fetch(url_api, {
    method:"POST",
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('error', error))
  .then(res => console.log('success', res));


  return (
    <div>
      <form /*onSubmit={handleSubmit_}*/>
        <div>
          <input
            name="fullname"
            type="text"
            placeholder="fullname"
            onChange={(e) => {set_fullname(e.target.value)}}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) => {set_email(e.target.value)}}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="passsword"
            onChange={(e) => {set_password(e.target.value)}}
          />
        </div>
        <button type="submit">send</button>
      </form>
    </div>
  );
}
