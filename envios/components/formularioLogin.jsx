import React from "react"
import '/components/bootstrap/dist/css/bootstrap.min.css'
import {Titulo} from './login/Titulo'
import {BotonLogin} from './login/botonLogin'
import {NavegadorLink} from './login/navegadorLink'
import {UsuarioLogin} from './login/usuarioLogin'
import {ContraseñaLogin} from './login/contraseñaLogin'


export function FormularioLogin(){

    return(
        <div className="container">
            <div class="col-md-4 col-md-offset-3">
                <form action="#" className="border p-3 form">
                    <Titulo/>
                    <NavegadorLink/>
                    <UsuarioLogin/>
                    <ContraseñaLogin/>
                    <BotonLogin/>
                </form>
            </div>
        </div>  
                
    )
}
