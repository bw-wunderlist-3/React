

export const initialState = {
    user: [{
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        role: ''
    }],
    isLoading: false,
    selected: false
    
   

}
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case LOADING: 
        return {
            ...state,
            isLoading: true
        }

        case CREATE_ITEM:
            return {
                ...state,
                isLoading: false,
                data: action.payload
                
            }
        case EDIT_ITEM:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }

            case DEL_ITEM:
                return {
                    ...state,
                    isLoading: false,
                    user: action.payload
                }

            default:
                return state
    }
}
