import React from "react";
import { useState } from 'react'

export function NombreRegistro(){
    const[nombre,setNombre]=useState('')
    return(
         
      <div className="mb-3">
        
        <input 
            type="text" 
            className="form-control" 
            id="usuario" 
            name="nombre"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            placeholder="Nombres"
            required
            
            />
        
    </div>
                          
      )
  }