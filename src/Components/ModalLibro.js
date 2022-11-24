import React, {useState} from 'react'
import FormularioLibro from './FormularioLibro';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';



function ModalLibro() {
    const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div>
        <Link className='btn btn-success' to='/FormLibro' onClick={handleShow}>
            <FaPlus/> Agregar Nuevo Libro
        </Link>

        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormularioLibro show={show} handleClose={() => setShow(false)}></FormularioLibro>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </div>
  );
}

export default ModalLibro