import { GETALL_EVENT } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GETALL_EVENT:
	        return action.getAllEvent
	    default:
	        return state;
    }
};