import React, { Fragment, useState}from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)

    // Modal Edit Description
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todo/${todo.todo_id}`,
                {
                    method: "Put",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }

    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeModal = () => setDescription(todo.description)

    return (
        <Fragment>
             
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>
           <Modal
                show={showModal} onHide={e => { handleClose(); closeModal(); }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
      
            >
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Edit Todo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={ e=> updateDescription(e)}>Edit</Button>
                    <Button variant="danger" onClick={e => { handleClose(); closeModal(); }}>Close</Button>
                </Modal.Footer>
            </Modal>
            
        </Fragment>
    )
}
export default EditTodo;

