import React from "react";
import { useState } from 'react'

export function CorreoRegistro(){
    const[correo,setCorreo]=useState('')
    return(
         
      <div className="mb-3">
          
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="correo"
          value={correo}
          onChange={(e)=>setCorreo(e.target.value)}
          placeholder="Correo"
          required
          />
    </div>           
                          
      )
  }