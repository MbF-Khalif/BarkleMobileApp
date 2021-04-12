import { CREATE_EVENT } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case CREATE_EVENT:
	        return action.createEvent
	    default:
	        return state;
    }
};