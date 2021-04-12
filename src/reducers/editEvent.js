import { EDIT_EVENT } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case EDIT_EVENT:
	        return action.editEvent
	    default:
	        return state;
    }
};