import React from 'react';
import { Link } from "react-router-dom";
import App from '../App.css'


function Navegador() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg text-white">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to='/' className='text-white ms-3 text-decoration-none'>
                🏠 Home</Link>
              <Link to='/contacto' className='text-white ms-3 text-decoration-none'>
              📒 Contacto</Link>
            </div>
            <span class="navbar-text text-white"> Happy Cake 🍰 </span>
          </div>
        </div>
      </nav>


    </div>
  )
}
export default Navegador;