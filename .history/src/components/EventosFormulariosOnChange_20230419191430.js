import React, { useState } from 'react'

export const EventosFormulariosOnChange = () => {
    const [usuario, setUsuraio] = useState({});

    const DatosUsuarios = e =>{
        e.preventDefault();
        const datos = e.target;
        console.log(datos.nombre.value);
        const usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            telefono: datos.telefono.value,
            texto: datos.texto.value,
            enviar:datos.enviar.value
        }
        setUsuraio(usuario)
        console.log(usuario)}
    const cambiarDatos = e =>{
        const name_del_input = e.target.name;
        setUsuraio(estado_previo =>({
            ...estado_previo,
            [name_del_input]:e.target.value
        })
        )
    }
  return (
    <div>
       <h1>Eventos - Formularios: Onchange</h1>
       {usuario.enviar && 
            (
                <div>
                    <h2>Bienvenido {usuario.nombre}{usuario.apellido}</h2>
                    <h3>Datos del usuario:</h3>
                    <p>
                        {usuario.telefono}
                        {usuario.texto}
                    </p>
                </div>
            )
       }
       
       <form onSubmit={DatosUsuarios} className='forulario'>
            <label>
                <input onChange={cambiarDatos} name='nombre' type='text' placeholder='Introduzca su nombre...'/>
            </label>
            <label>
                <input onChange={cambiarDatos} name='apellido' type='text' placeholder='Introduzca su apellido...'/>
            </label>
            <label>
                <input onChange={cambiarDatos} name='telefono' type="number" placeholder='Introduzca su nombre...'/>
            </label>
            <textarea  onChange={cambiarDatos} name='texto' placeholder='introduzca un texto'></textarea>
            <button className='button-enviar' type='submit' name='enviar'>Enviar</button>
        </form>         
    </div>
  )
}

