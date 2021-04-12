import { GETALL_CHALLENGEID } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GETALL_CHALLENGEID:
	        return action.getAllChallengeId
	    default:
	        return state;
    }
};