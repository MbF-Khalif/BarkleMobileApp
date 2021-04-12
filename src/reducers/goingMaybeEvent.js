import { GOINGMAYBE_EVENT } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GOINGMAYBE_EVENT:
	        return action.goingmaybeEvent
	    default:
	        return state;
    }
};