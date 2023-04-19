import React from 'react'

export const EventosFormularios = () => {

    const DatosUsuarios = e =>{
        e.preventDefault();
        const datos = e.target.value;
    }
  return (
    <div>
       <h1>Eventos - Formularios</h1>
       <form onSubmit={DatosUsuarios} className='forulario'>
            <label>
                <input type='text' placeholder='Introduzca su nombre...'/>
            </label>
            <label>
                <input type='text' placeholder='Introduzca su nombre...'/>
            </label>
            <label>
                <input type="number" placeholder='Introduzca su nombre...'/>
            </label>
            <textarea>Escriba un texto</textarea>
            <button className='button-enviar' type='submit'>Enviar</button>
        </form>         
    </div>
  )
}
