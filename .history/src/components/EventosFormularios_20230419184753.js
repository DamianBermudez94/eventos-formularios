import React, { useState } from 'react'

export const EventosFormularios = () => {
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
        }
        setUsuraio(usuario)
        console.log(usuario)}
  return (
    <div>
       <h1>Eventos - Formularios</h1>
       <div>
            <h2>Bienvenido {usuario.nombre}{usuario.apellido}</h2>
       </div>
       <form onSubmit={DatosUsuarios} className='forulario'>
            <label>
                <input name='nombre' type='text' placeholder='Introduzca su nombre...'/>
            </label>
            <label>
                <input name='apellido' type='text' placeholder='Introduzca su apellido...'/>
            </label>
            <label>
                <input name='telefono' type="number" placeholder='Introduzca su nombre...'/>
            </label>
            <textarea name='texto' placeholder='introduzca un texto'></textarea>
            <button className='button-enviar' type='submit'>Enviar</button>
        </form>         
    </div>
  )
}
