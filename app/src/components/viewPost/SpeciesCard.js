import React, { Component } from 'react'
import pandaImg from '../../icons/panda.jpeg'
import userImg from '../../icons/user.png'
export default function SpeciesCard(){
    return (
      <div >
          <div>
              <img src={userImg}/>
              <label>username</label>
          </div>
          <div>
              <img src={pandaImg}/>
          </div>
          <div>
              <label>
                  nombre de comun
              </label>
              <label>
                  nombre cientifico
              </label>
              <label>
                  ubicacion
              </label>
          </div>
      </div>
    )
}
