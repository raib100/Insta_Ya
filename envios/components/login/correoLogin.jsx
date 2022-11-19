import React from "react";
import { useState } from 'react'

export function CorreoLogin(){
    const[correo,setCorreo]=useState('')
    return(
         
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" name="form-label" id="lbl" >Dirección de recogida</label>
        <input 
            type="email" 
            className="form-control" 
            id="correo" 
            name="correo"
            value={correo}
            onChange={(e)=>setCorreo(e.target.value)}
            required
            
            />
        
    </div>
                          
      )
  }