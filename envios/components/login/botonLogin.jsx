import React from 'react'
import '/components/bootstrap/dist/css/bootstrap.min.css'
export function BotonLogin(){

    return(
       
        <div className="d-grid gap-2">
            <a href="registro.html">
            <button type="submit" className="btn btn-outline-dark" id="btn">Login</button>
        </a>
    </div>              
                
    )
}