import { CREATE_MISSIONS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case CREATE_MISSIONS:
	        return action.createMissions
	    default:
	        return state;
    }
};