import { CHECK_GOINGMAYBE } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case CHECK_GOINGMAYBE:
	        return action.checkgoingmaybe
	    default:
	        return state;
    }
};