import {React, useEffect} from 'react';
import ModalLibro from './ModalLibro';

function SeccionLibro() {  
    
useEffect(() => {
    if(localStorage.getItem("libros") != null){
        let lista = JSON.parse(localStorage.getItem("libros"));

        let encabezados = lista[0];

        document.querySelector("#col1").innerHTML = encabezados.id;
        document.querySelector("#col2").innerHTML = encabezados.titulo;
        document.querySelector("#col3").innerHTML = encabezados.autor;
        document.querySelector("#col4").innerHTML = encabezados.isbn;
        document.querySelector("#col5").innerHTML = encabezados.categoria;
        document.querySelector("#col6").innerHTML = encabezados.añopublicacion;

        const filas = document.querySelector("#filas");
        let filasHtml = "";
        lista.forEach(e => {
            
            if(e.id != "ID"){
                let btnEliminar = `<a class="btn btn-danger" href='/EliminarLibro/${e.id}'><i class="fa fa-trash"></i> Eliminar</a>`
                filasHtml += `<tr><td>${btnEliminar}</td><td>${e.id}</td><td>${e.titulo}</td><td>${e.autor}</td><td>${e.isbn}</td><td>${e.categoria}</td><td>${e.publicacion}</td></tr>`;
            }
            
        });
        filas.innerHTML = filasHtml;
    }
    
},[])

  return (
    <section id="tiendalibros" className='libro fondolibro'>
        <div className='table-responsive mt-5 mb-5 imagen' >
            <h1>LIBROS</h1>
            <table className='table'>
                <thead className='table-secondary'>
                    <tr>
                        <th><ModalLibro></ModalLibro></th>
                        <th id="col1"></th>
                        <th id="col2"></th>
                        <th id="col3"></th>
                        <th id="col4"></th>
                        <th id="col5"></th>
                        <th id="col6"></th>
                    </tr>
                </thead>
                <tbody id="filas" className="table-secondary">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                </tbody>
            </table>   
        </div>
    </section>
  )
}

export default SeccionLibro