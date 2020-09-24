import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TodoForm from './TodoForm'

export const ProtectedPage = () => {
    return (
        <div>
            <ul>
                <li>
                    Hello
                </li>
            </ul>
            <Link to='/todo' component={TodoForm} />
        </div>
    )
}


