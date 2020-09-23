import React, { useState } from 'react'
import {connect} from 'react-redux'
import { itemPost } from '../utils/actions'

const TodoForm = props => {
    const [tasks, setTasks] = useState({
        task: '',
        userId: ''
    })

    const handleChanges = e => {
        setTasks({
            ...tasks,
            [e.target.name] : e.target.value
        })
    }

    const formSubmit = e => {
        props.itemPost(tasks)
    }

    return (
        <div>
            <form onSubmit= { formSubmit }>
                <div>
                    <label htmlFor="task">
                        <input
                            type="text"
                            id="task"
                            name="task"
                            placeholder= "Enter a new task"
                            onChange= { handleChanges }
                            value= { tasks.task }
                        />
                    </label>
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       
        // props.itemPost: state.itemPost
    }
}


export default connect(mapStateToProps, {  })(TodoForm)