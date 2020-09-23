import {LOADING, SUCCESS, FAILURE, CREATE_ITEM, EDIT_ITEM, DEL_ITEM} from './actions'

export const initialState = {
    body: [],
    error: '',
    isLoading: false,
    selected: false
    
   

}
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case LOADING: 
        return {
            ...state,
            body: action.payload,
            isLoading: true
        }

        case CREATE_ITEM:
            return {
                ...state,
                isLoading: false,
                body: action.payload
                }

        case EDIT_ITEM:
            return {
                ...state,
                isLoading: false,
                body: action.payload
            }

            case DEL_ITEM:
                return {
                    ...state,
                    isLoading: false,
                    body: action.payload
                }

            default:
                return state
    }
}

export default reducer