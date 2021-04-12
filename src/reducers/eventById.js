import { EVENT_BY_ID } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case EVENT_BY_ID:
	        return action.event
	    default:
	        return state;
    }
};