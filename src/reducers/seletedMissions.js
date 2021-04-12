import { ADD_MISSION } from '../actions/types';
import { isEmpty } from 'lodash';

const initialstate = {    
    missions: []    
}; 

export default (state = initialstate, action = {}) => {
	console.log(action.mission ,'action.mission ')
    switch (action.type) {
        case ADD_MISSION:
        return {    
            ...state,    
            missions: action.mission   
        }; 
        default:
            return state;
    }
};
