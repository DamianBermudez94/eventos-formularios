import React from 'react'

export const EventosFormularios = () => {

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
        console.log(usuario)    }
  return (
    <div>
       <h1>Eventos - Formularios</h1>
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
