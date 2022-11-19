import React from "react";
import { useState } from 'react'

export function ContraseñaRegistro(){
    const[contraseña,setContraseña]=useState('')
    return(
         
      <div className="mb-3">
        
        <input 
            type="text" 
            className="form-control" 
            id="usuario" 
            name="contraseña"
            value={contraseña}
            onChange={(e)=>setContraseña(e.target.value)}
            placeholder="Contraseña"
            required
            
            />
        
    </div>
                          
      )
  }