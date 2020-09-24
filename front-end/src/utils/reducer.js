import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, CREATE_ITEM, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE, EDIT_ITEM, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAILURE, DEL_ITEM, DEL_ITEM_SUCCESS, DEL_ITEM_FAILURE} from './actions'

export const initialState = {
    todoData: [],
    isFetching: false,
    error: '',
    selected: false,
    updated: false
}
export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCHING_DATA: 
        return {
            ...state,
            isFetching: true,
            error: '',
            updated: false
        }

        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                todoData: action.payload,
                isFetching: false,
                error: '',
                updated: false
            }

        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                updated: false
            }

        case CREATE_ITEM:
            return {
                ...state,
                // todoData: action.payload,
                // isFetching: false
                }

        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                updated: false
            }

        case CREATE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                updated: false
            }

        case EDIT_ITEM:
            return {
                ...state,
                todoData: action.payload
            }

        case EDIT_ITEM_SUCCESS: 
            return {
                ...state,
                updated: true
            }

        case EDIT_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                updated: false
            }

            case DEL_ITEM:
                return {
                    ...state,
                    isLoading: false,
                    todoData: state.todoData.filter(i => i.id !== action.id)
                }

            case DEL_ITEM_SUCCESS:
                return {
                    ...state,
                    updated: false,
                    todoData: [...action.payload.data],
                    isLoading: false
                }

            default:
                return state
    }
}

