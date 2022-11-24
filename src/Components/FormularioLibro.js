import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaCheck, FaTimes} from 'react-icons/fa';

function FormularioLibro(props) {

  const {show, handleClose} = props;
  const [mensaje, setMensaje] = useState("");

  const guardarLibro = (() => {
    setMensaje("");
    
    let id = document.querySelector("#txtId").value;
    let titulo = document.querySelector("#txtTitulo").value;
    let autor = document.querySelector("#txtAutor").value;
    let isbn = document.querySelector("#txtIsbn").value;
    let categoria = document.querySelector("#txtCategoria").value;
    let publicacion = document.querySelector("#txtPublicacion").value;

    

    if(esValido(id, titulo, autor, isbn, categoria, publicacion)){
      if(localStorage.getItem("libros")!=null){
        let lista = JSON.parse(localStorage.getItem("libros"));

        if(existe(lista, id))
          setMensaje("El Id ingresado ya existe");

        else{

          let libro = {id:id, titulo:titulo, autor:autor, isbn:isbn, categoria:categoria, publicacion:publicacion}
          lista.push(libro);

          let j = JSON.stringify(lista);

          localStorage.setItem("libros", j)

          document.querySelector("#btnCancelar").click();
        }
      }
    }
    else{
      setMensaje("Complete todos los campos");
    }
})

  const esValido = ((id, titulo, autor, isbn, categoria, publicacion) => {
    return id == "" || titulo == "" || autor == "" || isbn == "" || categoria == "" || publicacion == "" ? false : true;
  })

  const existe = (lista, id) => {
    let encontrado = false;
    lista.forEach(e => {
      if(e.id==id)
          encontrado = true;
    });
    return encontrado;
  }

  return (
    <div className="formL">
      <h2 className="titform">Ingrese los datos del nuevo libro</h2>
      <div className='form'>
        <div className= {mensaje!=""?'alert alert-warning':''}>{mensaje}</div>
        <div className='mb-3 form-group'>
            <label className='form-label'>ID:</label>
            <input type="text" name="id" id="txtId" className='form-control'></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Titulo:</label>
            <input type="text" id="txtTitulo" name="titulo"  className='form-control' ></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Autor:</label>
            <input type="text" id="txtAutor" className='form-control' name="autor" ></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>ISBN:</label>
            <input type="text" className='form-control' id="txtIsbn" name="isbn" ></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Categoría:</label>
            <input type="text" className='form-control' id="txtCategoria" name="categoria" ></input>
        </div>
        <div className='mb-3 form-group'>
            <label className='form-label'>Año publicación:</label>
            <input type="number" className='form-control' id="txtPublicacion" name="publicacion" ></input>
        </div>
        <div>
          <button className="btn btn-primary m-3" onClick={() => guardarLibro()}><FaCheck/> Guardar</button>
          <Link id="btnCancelar" className="btn btn-danger mx-3" to='/Libros' onClick={() => handleClose(false)}><FaTimes/> Cancelar</Link>
        </div>     
    </div>
    </div>
  )
}

export default FormularioLibro