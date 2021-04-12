import { GETALL_CHALLENGE } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GETALL_CHALLENGE:
	        return action.getAllChallenge
	    default:
	        return state;
    }
};