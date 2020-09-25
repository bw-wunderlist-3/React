import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { TodoList } from './TodoList'
import {itemPost} from '../utils/actions'
import axiosWithAuth from "../utils/axiosWithAuth"

const TodoForm = props => {
    
    const [tasks, setTasks] = useState({
        task:"",        
        date: Date.now(), //12-01-2020,        
        used_id: '',       //Check to see what this is and if you are supposed to pass anything here.  
        completed: false  //Will be a checkbox. Checkbox will automatically code a boolean       
        })


    const handleChanges = e => {
        setTasks({
            ...tasks,
            [e.target.name] : e.target.value
        })
    }

    // addNewTask = taskName =>{
    //     setTasks({task: taskName, id:Date.now(), completed:false})

    //   }
    

    const formSubmit = e => {
        e.preventDefault()
        props.itemPost({tasks})
        

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
                            id={Date.now()}
                        />
                    </label>
                    <label htmlFor='user_id'>
                        <input 
                            type='text'
                            pattern='[0-9]'
                            id='user_id'
                            name='user_id'
                            placeholder='enter your user ID number'
                            value={tasks.user_id}
                            onChange={handleChanges}
                        />
                    </label>
                    <label htmlFor='completed'>
                    <input 
                        type='checkbox'
                        id='completed'
                        name='completed'
                        value={false}

                    />

                    </label>
                    <button type="submit">Add Task</button>
                    <TodoList />
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       
      itemPost: state.itemPost
    }
}


export default connect(mapStateToProps, { itemPost })(TodoForm)
