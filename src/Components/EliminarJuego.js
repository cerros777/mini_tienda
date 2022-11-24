import {React, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {FaCheck, FaTimes} from 'react-icons/fa';


const EliminarJuego = () => {
    const{id} = useParams();

useEffect(() => {
  if(localStorage.getItem("juegos") != null){
        let lista = JSON.parse(localStorage.getItem("juegos"));

        lista.forEach(e => {
            if(e.id == id){
            document.querySelector("#txtId").value = e.id;
            document.querySelector("#txtNombre").value = e.nombre;
            }
        });
    }
  
}, [])

const eliminarLibro = () => {
    if(localStorage.getItem("juegos") != null){
        let lista = JSON.parse(localStorage.getItem("juegos"));

        let index = -1;
        let i = 0;

        lista.forEach(e => {
            if(e.id == id){
                index = i
            }
            i++;
        });

        if(index != -1){
            lista.splice(index, 1)
        }

        let j = JSON.stringify(lista);

        localStorage.setItem("juegos", j);
        document.querySelector("#btnEliminar").click();
    }
}

  return (
    <div className='nombre'>
        <div className='container contain'>
            <div className='row preguntaeliminar'>
                <h4>¿Deseas eliminar el juego?</h4>
                <div>
                    <label className="form-label col-6">ID número:</label>
                    <input disabled type="text" name="id" id="txtId" style={{textAlign:'center'}}></input>
                    <label className="form-label col-6">Nombre:</label>
                    <input disabled type="text" name="id" id="txtNombre" style={{textAlign:'center'}}></input>
                </div>
                <div className='m-4'>
                    <button className='btn btn-primary m-3'  onClick={() => eliminarLibro()}><FaCheck/> Aceptar</button>
                    <Link className='btn btn-secondary' id="btnEliminar" to="/Juegos"><FaTimes/> Cancelar</Link>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default EliminarJuego