import React from "react";
import { useState } from 'react'

export function ContraseñaLogin(){
    const[contraseña,setContraseña]=useState('')
    return(
         
      <div className="mb-3">
        
        <input 
            type="text" 
            className="form-control" 
            id="usuario" 
            name="contraseña"
            value={contraseña}
            onChange={(e)=>setUsuario(e.target.value)}
            placeholder="Contraseña"
            required
            
            />
        
    </div>
                          
      )
  }