import { GET_CLASS_TIME } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GET_CLASS_TIME:
	        return action.classTime
	    default:
	        return state;
    }
};