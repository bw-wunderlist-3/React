import {axiosWithAuth} from './axiosWithAuth'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE'
export const CREATE_ITEM = 'CREATE_ITEM'
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS'
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE'
export const EDIT_ITEM = 'EDIT_ITEM'
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS'
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE'
export const DEL_ITEM = 'DEL_ITEM'
export const DEL_ITEM_SUCCESS = 'DEL_ITEM_SUCCESS'
export const DEL_ITEM_FAILURE = 'DEL_ITEM_FAILURE'


export const fetchData = () => {
    return (dispatch) => {
        dispatch({
            type: FETCHING_DATA
        })
        axiosWithAuth()
            .get(`/tasks`)
            .then(res => {
                console.log('Here from the get request', res.data)
                dispatch({
                    type: FETCHING_DATA_SUCCESS, payload: res.data
                })
            .catch(err => {
                console.log('Error from the get request', err)
                dispatch({
                    type: FETCHING_DATA_FAILURE, payload: err
                })
            })
            })
    }
}


export const itemPost = item => {
    const addNewItem = axiosWithAuth()
        .post('/tasks', item)
    return (dispatch) => {
        dispatch({
            type: CREATE_ITEM
        })
    addNewItem
        .then(({ todoData }) => {
            console.log(`I'm a new task`, todoData)
            dispatch({
                type: CREATE_ITEM_SUCCESS, payload: todoData
            })
        .catch(err => {
            console.log('No new task', err)
            dispatch({
                type: CREATE_ITEM_FAILURE, payload: err
            })
        })
        })
    }
}


export const editItem = item => dispatch => {
    dispatch({
        type: EDIT_ITEM
    })
    axiosWithAuth()
        .put(`/tasks/${item.id}`, item)
        .then(res => {
            dispatch({
                type: EDIT_ITEM_SUCCESS, payload: res.data
            })
        .catch(err => {
            console.log(`Can't edit that`, err)
            dispatch({
                type: EDIT_ITEM_FAILURE, payload: err
            })
        })
        })
}


export const deleteItem = item => {
    const removeItem = axiosWithAuth()
        .delete(`/tasks/${item.id}`, item)
    return (dispatch) => {
        dispatch({
            type: DEL_ITEM
        })
    removeItem
        .then(({ todoData }) => {
            dispatch({
                type: DEL_ITEM_SUCCESS, payload: todoData
            })
        })
        .catch(err => {
            console.log(`Can't delete that`, err)
            dispatch ({
                type: DEL_ITEM_FAILURE, payload: err
            })
        })
    }
}

// export const itemGet = () => dispatch => {
//     dispatch({
//         type: LOADING
//     })
//     axiosWithAuth()
//     .get('/tasks')
//     .then(res => {
//         dispatch({
//             type: SUCCESS,  
//             payload: res.data
//         })
//     })
// }

// export const itemPost = data => dispatch => {
//     console.log('post action in action.js ')
//     dispatch({
//         type: LOADING
//     })
//     axiosWithAuth()
//     .post('/tasks', data)
//     .then(res => {
//         dispatch({
//             type: CREATE_ITEM,
//             payload: res.data
//         })
//     })
//     .catch(err => {
//         console.log('CREATE_ITEM error! ', err)
//     })
// }

// export default connect(mapPropsToState, {smurfGet, smurfPost})(App)


