import { GET_CLASS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GET_CLASS:
	        return action.classTime
	    default:
	        return state;
    }
};