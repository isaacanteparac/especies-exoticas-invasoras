import React, { Component } from 'react'
import pandaImg from '../../icons/panda.jpeg'
export default function SpeciesCard(){
    return (
      <div >
          <div>
      
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
