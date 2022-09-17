import React from 'react'
import App from '../App.css'

const Contacto = () => {
    return (
        <div className='container m-5 w-100'>
                <form className="form-group">
                    <div className=" mt-4">
                        <label className=" mb-2">Correo</label>
                        <input type="mail" 
                        className="form-control"
                        placeholder='name@example.com' />
                    </div>
                    <div className=" mt-4">
                        <label className=" mb-2">Descripción</label>
                         <textarea class="form-control" rows="3"></textarea>
                    </div>
                  
                    <button type="submit" className="btn
                      mt-4">Enviar</button>

                </form>
        </div>
    )
}

export default Contacto