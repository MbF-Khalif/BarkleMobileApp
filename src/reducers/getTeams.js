import { GET_TEAMS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GET_TEAMS:
	        return action.getTeams
	    default:
	        return state;
    }
};