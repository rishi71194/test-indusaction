export const initialState = {
    children: [],
    states: [],
    districts: [],
    user: null,
};

const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_STATE':
            return {
                ...state,
                states: [...state.states, action.payload],
            };
        case 'ADD_DISTRICT':
            return {
                ...state,
                districts: [...state.districts, action.payload],
            };
            
        default:
                return state;
    }
}


export default reducer;