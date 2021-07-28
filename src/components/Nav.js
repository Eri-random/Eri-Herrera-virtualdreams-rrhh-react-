import React from 'react';
import './styles/nav.css';
import logo from '../img/logo.png';

class Nav extends React.Component {
    render() {
        return (

            <nav className="navbar navbar-dark navbar-expand-lg bg-primary" >
                    <a className="navbar-brand ms-5" href="">Virtual Dreams</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className="navbar-nav container-fluid mx-auto text-center">
                            <a className="nav-item nav-link" href="">Inicio</a>
                            <a className="nav-item nav-link" href="">servicios</a>
                            <a className="nav-item nav-link" href="">quiénes somos</a>
                            <a className="nav-item nav-link" href="">búsqueda</a>
                            <a className="nav-item nav-link active" href="">contacto</a>

                        </div>
                    </div>

            </nav>

        );
    }

}

export default Nav;