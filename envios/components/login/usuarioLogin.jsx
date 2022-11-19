import React from "react";
import { useState } from 'react'
export function UsuarioLogin(){
    const[usuario,setUsuario]=useState('')
    return(
         
      <div className="mb-3">
        
        <input 
            type="text" 
            className="form-control" 
            id="usuario" 
            name="usuario"
            value={usuario}
            onChange={(e)=>setUsuario(e.target.value)}
            placeholder="Usuario"
            required
            
            />
        
    </div>
                          
      )
  }