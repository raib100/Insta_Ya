import React from 'react'
import { useState } from 'react'


import '/components/bootstrap/dist/css/bootstrap.min.css'

import {BotonLogin} from '/components/botonLogin'


export function Formulario(){

/* Se actualizan y se guardan los valores de los campos*/
const [form,setForm]=useState({});

const handleChange = (e)=> {
    setForm({
        ...form,
        [e.target.name]:e.target.value,
    });
}
/* Envio exitoso del submit*/
const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Envio exitoso")
}
    return(
        <>
        
        <div className="container">
            <form onSubmit={handleSubmit}>
                        <h3 id = "titulo">ENTREGAS INSTA-YA</h3>
                        <nav className="navbar navbar-expand-lg bg-transparent " id="navegador" >
                            <div className="container-fluid">
                            <h5 className="navbar-brand" href="#">Gestión de paquetes - Login</h5>
                            
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="navbar-nav ms-auto">
                                
                                    <a className="nav-link active" aria-current="page" href="/registro2.html">Registrarse</a>                                               
                                
                                </div>
                            </div>
                            </div>
                        </nav>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" name="form-label" id="lbl" >Usuario</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="usuario" 
                                name="nombre"
                                value={form.nombre}
                                placeholder="Usuario"
                                onChange={handleChange}
                                required
                                
                                />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" name="form-label" id="lbl" >Contraseña</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            value={form.password}
                            placeholder="Contraseña"
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <a href="registro.html">
                                <button type="submit" className="btn btn-light" id="btn">Login</button>
                            </a>
                        </div>
                        <BotonLogin/>
                       
                        
                </form>
                
                
                
                
        </div>
        
        </>
    )
}
