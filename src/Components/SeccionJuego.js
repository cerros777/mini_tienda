import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';

function SeccionJuego() {

useEffect(() => {
    if(localStorage.getItem("juegos") != null){
        let lista = JSON.parse(localStorage.getItem("juegos"))

        let encabezado = lista[0];

        document.querySelector("#col1").innerHTML = encabezado.id;
        document.querySelector("#col2").innerHTML = encabezado.nombre;
        document.querySelector("#col3").innerHTML = encabezado.plataforma;
        document.querySelector("#col4").innerHTML = encabezado.genero;
        document.querySelector("#col5").innerHTML = encabezado.multijugador;
        document.querySelector("#col6").innerHTML = encabezado.distribuidor;
        document.querySelector("#col7").innerHTML = encabezado.añolanzamiento;

        const filas = document.querySelector("#filas");
        let filasHtml = "";

        lista.forEach(e => {
            if(e.id != "ID"){
                let btnEliminar = `<a class="btn btn-danger" href="/EliminarJuego/${e.id}"><i class="fa fa-trash"></i> Eliminar</a>`
                filasHtml += `<tr><td>${btnEliminar}</td><td>${e.id}</td><td>${e.nombre}</td><td>${e.plataforma}</td><td>${e.genero}</td><td>${e.multijugador}</td><td>${e.distribuidor}</td><td>${e.añolanzamiento}</td></tr>`
            }
            filas.innerHTML = filasHtml;
        });
    }
}, [])

  return (
    <section id="tiendajuegos" className='juegos fondojuegos'>
        <div className='table-responsive mt-5'>
            <h1 className='titulojuegos'>VIDEOJUEGOS</h1>
            <table className='table'>
                <thead className='table-secondary'>
                    <tr>
                        <th><Link className="btn btn-success" to='/FormJuego'><FaPlus/> Agregar Nuevo Videojuego</Link></th>
                        <th id="col1"></th>
                        <th id="col2"></th>
                        <th id="col3"></th>
                        <th id="col4"></th>
                        <th id="col5"></th>
                        <th id="col6"></th>
                        <th id="col7"> </th>
                    </tr>
                </thead>
                <tbody id="filas" className='table-secondary'>

                </tbody>
            </table>
            
        </div>
    </section>
  )
}

export default SeccionJuego