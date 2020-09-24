import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Todo from './Todo'

import { fetchData } from '../utils/actions'
import { editItem } from '../utils/actions'
import { deleteItem } from '../utils/actions'


const initialValues = {
    body: "",
    date: ""
}

export const TodoList = props => {
    const [todos, setTodos] = useState([])
    const [editTodos, setEditTodos] = useState(initialValues)
    const params = useParams()
    const push  = useHistory()

    return (
        todos.map(todo => (
            <div key= { todo.key }>
                        <h2> {todo.body} </h2>
                        <p> { todo.date } </p>
                        <button className="editpost-button" onClick={ editItem }>Edit Task</button>
                        <button className="deletepost-button" onClick={ deleteItem }>Delete Task</button>
            </div>
        ))
    )
}