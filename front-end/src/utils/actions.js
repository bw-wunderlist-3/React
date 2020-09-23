import axiosWithAuth from './axiosWithAuth'
export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const CREATE_ITEM = 'CREATE_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const DEL_ITEM = 'DEL_ITEM'

export const itemGet = () => dispatch => {
    dispatch({
        type: LOADING
    })
    axiosWithAuth()
    .get('/tasks')
    .then(res => {
        dispatch({
            type: SUCCESS,  
            payload: res.data
        })
    })
}

export const itemPost = data => dispatch => {
    console.log('post action in action.js ')
    dispatch({
        type: LOADING
    })
    axiosWithAuth()
    .post('/tasks', data)
    .then(res => {
        dispatch({
            type: CREATE_ITEM,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('CREATE_ITEM error! ', err)
    })
}

