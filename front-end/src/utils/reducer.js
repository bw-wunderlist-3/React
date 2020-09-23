

export const initialState = {
    data: [],
    isLoading: false,
    selected: false,
    id: null
   

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
                data: action.payload
            }

            case DEL_ITEM:
                return {
                    ...state,
                    isLoading: false,
                    data: action.payload
                }

            default:
                return state
    }
}
