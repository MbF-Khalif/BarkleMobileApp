import { GET_INSTRUCTOR } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GET_INSTRUCTOR:
	        return action.instructor
	    default:
	        return state;
    }
};