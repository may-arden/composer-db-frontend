// to avoid extra nesting define initial state as empty array 

export const composersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_COMPOSERS':
            return action.payload 
        case 'ADD_COMPOSER':
            return [...state, action.payload]
        default: return state 
    }
}