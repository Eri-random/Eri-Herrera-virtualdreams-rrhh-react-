import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import './globales.css';
import Contacto from './pages/Contacto';



        const container = document.getElementById("app");

        //que y donde queremos randerizar
        ReactDOM.render(
        <Contacto
        />, container);