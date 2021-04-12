import { GETALL_MISSIONS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GETALL_MISSIONS:
	        return action.getAllMissions
	    default:
	        return state;
    }
};