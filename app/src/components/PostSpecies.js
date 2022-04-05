import React, { useState } from "react";
import { Input, Textarea, FileDiv, FileInput } from "../style/input";
import { Button } from "../style/button";
import { DivCenterElement, DivBoxRegister } from "../style/div";

export default function PostSpecies() {
  const [name, setName] = useState(null);
  const [scientificName, setScientificName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [sound, setSound] = useState(null);
  const [description, setDescription] = useState(null);
  const url_api = "ruta de api";

  const data = {
    name,
    photo,
    location,
    sound,
    description,
    scientificName,
  };

  fetch(url_api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .catch((error) => console.error("error", error))
    .then((res) => console.log("success", res));

  return (
    <DivBoxRegister>
      <h1>Animal registration</h1>
      <form /*onSubmit={handleSubmit_}*/>
        <div>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            name="scientificName"
            type="text"
            placeholder="Scientific name"
            onChange={(e) => {
              setScientificName(e.target.value);
            }}
          />
        </div>
        <div>
          <Textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></Textarea>
        </div>
        <DivCenterElement>
          <FileDiv>
            <FileInput
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="photo"
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M 23.757812 5.628906 C 23.53125 5.25 23.167969 4.984375 22.738281 4.878906 L 9.964844 1.734375 C 9.835938 1.703125 9.703125 1.6875 9.570312 1.6875 C 8.804688 1.6875 8.144531 2.207031 7.960938 2.949219 L 7.578125 4.511719 L 1.191406 6.539062 C 0.335938 6.808594 -0.164062 7.703125 0.0507812 8.570312 L 3.121094 21.0625 C 3.226562 21.496094 3.496094 21.855469 3.878906 22.082031 C 4.136719 22.234375 4.421875 22.3125 4.710938 22.3125 C 4.855469 22.3125 4.996094 22.292969 5.140625 22.257812 L 14.976562 19.625 L 18.875 20.582031 C 19.003906 20.617188 19.136719 20.632812 19.269531 20.632812 C 20.035156 20.632812 20.695312 20.113281 20.878906 19.371094 L 23.953125 6.878906 C 24.058594 6.453125 23.988281 6.007812 23.757812 5.628906 Z M 4.859375 20.425781 L 1.867188 8.253906 L 7.0625 6.605469 L 4.890625 15.4375 C 4.785156 15.867188 4.851562 16.3125 5.082031 16.691406 C 5.308594 17.070312 5.671875 17.335938 6.101562 17.441406 L 11.269531 18.710938 Z M 20.585938 12.859375 L 18.839844 10.171875 C 18.625 9.839844 18.269531 9.644531 17.886719 9.644531 C 17.628906 9.644531 17.378906 9.730469 17.171875 9.898438 L 13.449219 12.859375 C 13.339844 12.945312 13.203125 12.992188 13.054688 12.992188 C 12.863281 12.992188 12.683594 12.910156 12.566406 12.769531 L 11.15625 11.089844 C 10.886719 10.769531 10.453125 10.578125 9.996094 10.578125 C 9.773438 10.578125 9.554688 10.628906 9.367188 10.71875 L 7.746094 11.53125 L 9.703125 3.566406 L 22.121094 6.621094 Z M 20.585938 12.859375 "
                />
                <path
                  fill="currentcolor"
                  d="M 12.753906 8.941406 C 12.882812 8.976562 13.015625 8.992188 13.148438 8.992188 C 13.910156 8.992188 14.570312 8.476562 14.75 7.734375 C 14.96875 6.851562 14.425781 5.957031 13.542969 5.738281 C 13.414062 5.707031 13.28125 5.691406 13.148438 5.691406 C 12.386719 5.691406 11.726562 6.207031 11.546875 6.945312 C 11.328125 7.832031 11.871094 8.726562 12.753906 8.941406 Z M 12.753906 8.941406 "
                />
              </svg>
            </span>
          </FileDiv>

          <FileDiv>
            <FileInput
              type="file"
              accept="audio/mp3"
              name="sound"
              onChange={(e) => {
                setSound(e.target.value);
              }}
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M 423.909505 99.202474 L 423.502604 72.021484 L 182.210286 108.479818 L 182.617188 133.382161 L 182.373047 133.382161 L 182.373047 318.766276 C 167.480469 309.814453 148.111979 306.640625 128.417969 311.360677 C 92.203776 320.23112 69.010417 353.027344 76.660156 384.521484 C 84.391276 416.015625 120.035807 434.488932 156.33138 425.69987 C 186.360677 418.375651 207.519531 394.53125 209.309896 368.489583 L 209.472656 368.489583 L 209.472656 174.886068 L 397.705078 146.402995 L 397.705078 284.586589 C 382.8125 275.634766 363.36263 272.379557 343.66862 277.18099 C 307.535807 285.970052 284.261068 318.766276 291.992188 350.260417 C 299.723307 381.917318 335.286458 400.309245 371.582031 391.520182 C 401.692708 384.195964 422.770182 360.270182 424.560547 334.309896 L 424.804688 334.309896 L 424.804688 99.202474 Z M 423.909505 99.202474 "
                  transform="matrix(0.048,0,0,0.048,0,0)"
                />
                <path
                  fill="currentcolor"
                  d="M 20.347656 4.761719 L 20.328125 3.457031 L 8.746094 5.207031 L 8.765625 6.402344 L 8.753906 6.402344 L 8.753906 15.300781 C 8.039062 14.871094 7.109375 14.71875 6.164062 14.945312 C 4.425781 15.371094 3.3125 16.945312 3.679688 18.457031 C 4.050781 19.96875 5.761719 20.855469 7.503906 20.433594 C 8.945312 20.082031 9.960938 18.9375 10.046875 17.6875 L 10.054688 17.6875 L 10.054688 8.394531 L 19.089844 7.027344 L 19.089844 13.660156 C 18.375 13.230469 17.441406 13.074219 16.496094 13.304688 C 14.761719 13.726562 13.644531 15.300781 14.015625 16.8125 C 14.386719 18.332031 16.09375 19.214844 17.835938 18.792969 C 19.28125 18.441406 20.292969 17.292969 20.378906 16.046875 L 20.390625 16.046875 L 20.390625 4.761719 Z M 20.347656 4.761719 "
                />
              </svg>
            </span>
          </FileDiv>
        </DivCenterElement>
        <Button variant="orange" type="submit">Register</Button>
      </form>
    </DivBoxRegister>
  );
}
