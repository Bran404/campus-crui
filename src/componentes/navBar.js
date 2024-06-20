import React from 'react';
import '../styles/navBarStyle.css';

function NavBar(){
    return(
    <header className='App-header'>
      <nav>
        <ul className='nav'>
          <h4>Centro Regional Universitario de Ituzaingo</h4>
          <a href='#'><li className='nav-item'>INGRESO</li></a>
          <a href='#'><li className='nav-item'>PAGINA</li></a>
          <a href='#'><li className='nav-item'>PAGINA</li></a>
        </ul>
      </nav>
    </header>
);
}

export default NavBar;