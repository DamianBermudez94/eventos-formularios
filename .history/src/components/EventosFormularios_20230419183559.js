import React from 'react'

export const EventosFormularios = () => {

    const DatosUsuarios = e =>{
        e.preventDefault();
        const datos = e.target.value;
        console.log(datos.nombre.value);
    }
  return (
    <div>
       <h1>Eventos - Formularios</h1>
       <form onSubmit={DatosUsuarios} className='forulario'>
            <label>
                <input name='nombre' type='text' placeholder='Introduzca su nombre...'/>
            </label>
            <label>
                <input name='apellido' type='text' placeholder='Introduzca su nombre...'/>
            </label>
            <label>
                <input name='telefono' type="number" placeholder='Introduzca su nombre...'/>
            </label>
            <textarea name='texto'>Escriba un texto</textarea>
            <button className='button-enviar' type='submit'>Enviar</button>
        </form>         
    </div>
  )
}
