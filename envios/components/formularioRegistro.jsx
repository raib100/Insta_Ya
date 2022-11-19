import React from "react"
import '/components/bootstrap/dist/css/bootstrap.min.css'
import {Titulo} from './registro/Titulo'
import {BotonRegistro} from './registro/botonRegistro'
import {Navegador} from './registro/navegador'
import {UsuarioRegistro} from './registro/usuarioRegistro'
import {ContraseñaRegistro} from './registro/contraseñaRegistro'
import {NombreRegistro} from './registro/nombreRegistro'
import {CorreoRegistro} from './registro/correoRegistro'

export function FormularioRegistro(){

    return(
        <div className="container">
            <div class="col-md-4 col-md-offset-3">
                <form action="#" className="border p-3 form">
                    <Titulo/>
                    <Navegador/>
                    <NombreRegistro/>
                    <UsuarioRegistro/>
                    <ContraseñaRegistro/>
                    <CorreoRegistro/>
                    <BotonRegistro/>
                </form>
            </div>
        </div>  
                
    )
}
