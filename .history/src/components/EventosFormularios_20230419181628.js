import React from 'react'

export const EventosFormularios = () => {
  return (
    <div>
       <h1>Eventos - Formularios</h1>
       <form className='forulario'>
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
