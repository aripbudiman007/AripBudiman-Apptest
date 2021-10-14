const INITIAL_STATE = {
    contacts: [],
    contact: {}
}

function reducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'GET_CONTACT' : 
            return {
                ...state,
                contacts: action.payload
            }
        case 'GET_CONTACT_BY_ID' : 
            return {
                ...state,
                contact: action.payload
            }
        default:
            return state
    }
}

export default reducer