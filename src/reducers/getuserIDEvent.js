import { GETUSERID_EVENT } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GETUSERID_EVENT:
	        return action.getuseridEvent
	    default:
	        return state;
    }
};