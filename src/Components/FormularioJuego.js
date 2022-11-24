import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaCheck, FaTimes} from 'react-icons/fa';

function FormularioJuego() {

const [mensaje, setMensaje] = useState("");

const guardarJuego = (() => {
    setMensaje("");

    let id = document.querySelector("#txtId").value;
    let nombre = document.querySelector("#txtNombre").value;
    let p = document.querySelector("#txtPlataforma");
    let plataformatxt = p.options[p.selectedIndex].text;
    let genero = document.querySelector("#txtGenero").value;
    let m = document.querySelector("#txtMulti");
    let multijugador = m.options[m.selectedIndex].text;
    let d = document.querySelector("#txtDistri");
    let distribuidor = d.options[d.selectedIndex].text;
    let año = document.querySelector("#txtAño").value;

    if(siValido(id, nombre, plataformatxt, genero, multijugador, distribuidor, año)){
        if(localStorage.getItem("juegos") != null){
            let lista = JSON.parse(localStorage.getItem("juegos"));

            if(siExiste(lista, id)){
                setMensaje("El ID ingresado ya existe");
            }
            else{
                let juego = {id:id, nombre:nombre, plataforma:plataformatxt, genero:genero, multijugador:multijugador, distribuidor:distribuidor, añolanzamiento:año}
                lista.push(juego);

                let j = JSON.stringify(lista);

                localStorage.setItem("juegos", j);

                document.querySelector("#btnCancelar").click();
            }
        }
    }
    else{
        setMensaje("Complete todos los campos");
    }

})

const siValido = ((id, nombre, plataformatxt, genero, multijugador, distribuidor, año) => {
    return id == "" || nombre == "" || plataformatxt == "Seleccionar plataforma" || genero == "" || multijugador == "Seleccione una opción:" || distribuidor == "Seleccionar una opción:" || año == "" ? false : true; 
})

const siExiste = (lista, id) => {
    let encontrado = false;
    lista.forEach(e => {
        if(e.id==id){
            encontrado = true;
        }
    }); return encontrado;
}
  return (
    <div className="formL">
        <h2 className="titform">Ingrese los datos del nuevo videojuego</h2>
        <div className='form'>
        <div className= {mensaje!=""?'alert alert-warning':''}>{mensaje}</div>
        <div className='mb-3 form-group'>
            <label className='form-label'>ID:</label>
            <input type="text" className='form-control' id="txtId"></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Nombre:</label>
            <input type="text" className='form-control' id="txtNombre"></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Plataforma:</label>
            <select className="form-select" aria-label="Default select example" id="txtPlataforma">
                <option defaultValue>Seleccionar plataforma</option>
                <option value="1">PlayStation</option>
                <option value="2">Xbox</option>
                <option value="3">Nintendo</option>
                <option value="4">Smartphone</option>
                <option value="5">Computadora</option>
                <option value="6">Otro</option>
            </select>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Género:</label>
            <input type="text" className='form-control' id="txtGenero"></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Multijugador:</label>
            <select className="form-select" aria-label="Default select example" id="txtMulti">
                <option defaultValue>Seleccione una opción:</option>
                <option value="1">Si</option>
                <option value="2">No</option>
            </select>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Distribuidor:</label>
            <select className="form-select" aria-label="Default select example" id="txtDistri">
                <option defaultValue>Seleccionar una opción:</option>
                <option value="1">Sony</option>
                <option value="2">Xbox</option>
                <option value="3">Nintendo</option>
                <option value="4">Ubisoft</option>
                <option value="5">Konami</option>
                <option value="6">Otro</option>
            </select>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Año lanzamiento:</label>
            <input type="number" className='form-control' id="txtAño" min={1900} max={2023}></input>
        </div>
        <div>
          <button className="btn btn-primary m-3" onClick={() => guardarJuego()}><FaCheck/> Guardar</button>
          <Link id="btnCancelar" className="btn btn-danger mx-3" to='/Juegos'><FaTimes/> Cancelar</Link>
        </div> 
    </div>
    </div>
  )
}

export default FormularioJuego