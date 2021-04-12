import { GETGOINGMAYBE_LIST } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GETGOINGMAYBE_LIST:
	        return action.getgoingmaybe
	    default:
	        return state;
    }
};