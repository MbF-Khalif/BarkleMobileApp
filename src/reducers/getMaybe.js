import { GETMAYBE_EVENT } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GETMAYBE_EVENT:
	        return action.getmaybe
	    default:
	        return state;
    }
};