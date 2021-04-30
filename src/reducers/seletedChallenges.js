import { ADD_CHALLENGE } from '../actions/types';

const initialstate = {    
    challenges: []    
}; 

export default (state = initialstate, action = {}) => {
    switch (action.type) {
        case ADD_CHALLENGE:
        return {    
            ...state,    
            challenges: action.challenges   
        }; 
        default:
            return state;
    }
};
