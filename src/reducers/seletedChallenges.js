import { ADD_CHALLENGE } from '../actions/types';
import { isEmpty } from 'lodash';

const initialstate = {    
    challenges: []    
}; 

export default (state = initialstate, action = {}) => {
	console.log(action,action.mission ,'action.mission ')
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
