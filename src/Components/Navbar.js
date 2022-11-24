import React from 'react'
import {ImBooks} from 'react-icons/im';
import {BsController} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0">
            <div className="container-fluid">
                <h2><Link className="navbar-brand" to="/">Nombre Tienda</Link></h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><Link className="dropdown-item" to='/Libros'><ImBooks size="1.5em" style={{marginRight: 3}} ></ImBooks>Libros</Link></li>
                            <li><Link className="dropdown-item" to="/Juegos"><BsController size="1.3em"></BsController> Videojuegos</Link></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar