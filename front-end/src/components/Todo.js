import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'




const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <h2> {todo.task} </h2>
            <p> {todo.date} </p>
        </div>
    )
}

export default Todo