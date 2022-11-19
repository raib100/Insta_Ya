import React,{useState} from 'react'

import 'bootstrap'

export function BotonLogin(){

    return(
       
        <div className="d-grid gap-2">
            <a href="registro.html">
            <button type="submit" className="btn btn-outline-dark" id="btn">Login</button>
        </a>
    </div>              
                
    )
}

export function CajaNombre(){
    const[nombre,setNombre]=useState('')
    return(
         
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" name="form-label" id="lbl" >Dirección de recogida</label>
        <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            name="nombre"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            required
            
            />
        
    </div>
                          
      )
  }
  
  export function CajaUsuarioLogin(){

    return(
         
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" name="form-label" id="lbl" >Ciudad de recogida</label>
        <input 
            type="text" 
            className="form-control" 
            id="usuario" 
            name="nombre"
            value=''
            
            required
            
            />
        
    </div>
                          
      )
  }

  export function CajaPasswordLogin(){

    return(
         
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" name="form-label" id="lbl" >Nombre del destinatario</label>
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password"
          value=''
         
          
          required
          />
    </div>           
                          
      )
  }
  export function CedulaDestinatario(){

    return(
         
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" name="form-label" id="lbl" >Cédula destinatario</label>
        <input 
            type="text" 
            className="form-control" 
            id="usuario" 
            name="nombre"
            value=''
            
            required
            
            />
        
    </div>
                          
      )
  }

  export function NavegadorLogin(){

    return(
         
      <nav className="navbar navbar-expand-lg bg-transparent " id="navegador" >
        <div className="container-fluid">
          <h4 className="navbar-brand" href="#">Gestión de paquetes - Actualización</h4>
        </div>
      </nav>
                       
      )
  }
  
  export function Titulo(){

    return(
         
      <h3 id = "titulo">ENTREGAS INSTA-YA</h3>   
                          
      )
  }
  
  export function Link(){

    return(   
        <nav className="navbar navbar-expand-lg bg-transparent " id="navegador" >
          <div className="container-fluid">
            <h4 className="navbar-brand" href="#">Gestión de paquetes - Login</h4>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="/registro2.html">Registrarse</a>                                               
              </div>
            </div>
          </div>
        </nav>
      )
  }

  export function Correo(){

    return(
         
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" name="form-label" id="lbl" >Correo</label>
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="correo"
          value=''
          
          
          required
          />
    </div>           
                          
      )
  }

export function DireccionEntrega(){

  return(
       
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" name="form-label" id="lbl" >Dirección entrega</label>
      <input 
          type="text" 
          className="form-control" 
          id="usuario" 
          name="nombre"
          value=''
          
          required
          
          />
      
  </div>
                        
    )
}

export function CiudadEntrega(){

  return(
       
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" name="form-label" id="lbl" >Ciudad entrega</label>
      <input 
          type="text" 
          className="form-control" 
          id="usuario" 
          name="nombre"
          value=''
          
          required
          
          />
      
  </div>
                        
    )
}

export function Dimensiones(){
  return(   
      <nav className="navbar navbar-expand-lg bg-transparent " id="navegador" >
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <input 
                type="text" 
                className="form-control" 
                id="dimension" 
                name="nombre"
                value=''
                placeholder='Largo'
              />                    
              <input 
                type="text" 
                className="form-control" 
                id="dimension" 
                name="nombre"
                value=''
                placeholder='Ancho'
              />                 
              <input 
                type="text" 
                className="form-control" 
                id="dimension" 
                name="nombre"
                value=''
                placeholder='Alto'
              />                  
              <input 
                type="text" 
                className="form-control" 
                id="dimension" 
                name="nombre"
                value=''
                placeholder='Peso'
              />                          
            </div>
          </div>
        </div>
      </nav>
    )
}

export function FechaHora(){
  return(   
    
    <nav className="navbar navbar-expand-lg bg-transparent " id="navegador" >
    <div className="container-fluid">
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto">
          <input 
            type="text" 
            className="form-control" 
            id="dimension" 
            name="nombre"
            value=''
            placeholder='Fecha'
          />                    
          <input 
            type="text" 
            className="form-control" 
            id="dimension" 
            name="nombre"
            value=''
            placeholder='Hora'
          />                 
           
        </div>
      </div>
    </div>
  </nav>
    )
}
export function Estado(){
  return(   
    
    <nav className="navbar navbar-expand-lg bg-transparent " id="navegador" >
    <div className="container-fluid">
      <h4 className="navbar-brand" href="#"> Estado</h4>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto">
          <select name="select" id="selector">
            <option value="value1">Value 1</option>
            <option value="value2" selected>Guardado</option>
          
          </select>       
          
        </div>
      </div>
    </div>
  </nav>
    )
}

export function FormularioLogin(){

    return(
        <div className="container">
            <div className="abs-center">
                <form action="#" className="border p-3 form">
                    <h3>HOLA MUNDO</h3>
                </form>
            </div>
        </div>  
                
    )
}
