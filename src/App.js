import {React, useEffect} from 'react'
import Navbar from './Components/Navbar';
import NombreTienda from './Components/NombreTienda';
import SeccionLibro from './Components/SeccionLibro';
import SeccionJuego from './Components/SeccionJuego';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EliminarLibro from './Components/EliminarLibro';
import FormularioLibro from './Components/FormularioLibro';
import FormularioJuego from './Components/FormularioJuego';
import EliminarJuego from './Components/EliminarJuego';

const App = () => {

    useEffect(() =>{
   
        if(localStorage.getItem("libros")==null){
            let encabezados = {id:"ID", titulo:"Titulo", autor:"Autor", isbn:"ISBN", categoria:"Género Literario", añopublicacion: "Año de Publicación"}
           
    
            let lista = [];
            lista.push(encabezados);
            let j = JSON.stringify(lista)
    
            localStorage.setItem("libros", j);
        }
        //console.log(localStorage.getItem("libros"))
    }, [])

    useEffect(() => {
        if(localStorage.getItem("juegos") == null){
            let encabezado = {id: "ID", nombre:"Nombre", plataforma:"Plataforma", genero:"Género", multijugador:"Multijugador", distribuidor: "Distribuidor", añolanzamiento: "Año de lanzamiento"}

            let listaJ = [];
            listaJ.push(encabezado);
            let h = JSON.stringify(listaJ)

            localStorage.setItem("juegos", h);
        }
    }, [])


  return (
    
    
        <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
            <Route path='/' exact element={<NombreTienda></NombreTienda>}></Route>
            <Route path='/Libros' element={<SeccionLibro></SeccionLibro>}></Route>
            <Route path='/Juegos' element={<SeccionJuego></SeccionJuego>}></Route>
            <Route path='/EliminarLibro/:id' element={<EliminarLibro></EliminarLibro>}></Route>
            <Route path='/FormLibro' element={<FormularioLibro/>}></Route>
            <Route path='/FormJuego' element={<FormularioJuego></FormularioJuego>}></Route>
            <Route path='/EliminarJuego/:id' element={<EliminarJuego/>}></Route>
        </Routes>
  
    </BrowserRouter>
    
  )
}

export default App