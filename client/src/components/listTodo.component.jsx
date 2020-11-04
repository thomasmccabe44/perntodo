import React, { Fragment, useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

import EditTodo from './editTodo.component';

const ListTodo = () => {

    const [todos, setTodos] = useState([]);


    // Delete function

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`, { method: "DELETE" })
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodos = async () => {
        try {

            const response = await fetch("http://localhost:5000/todo");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);
    return (
        <Fragment>
            {""}
            <Table className="mt-5 text-center"striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo}/></td>
                            <td><Button onClick={() => deleteTodo(todo.todo_id)} variant='danger'>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Fragment>
    );
    
}

export default ListTodo;