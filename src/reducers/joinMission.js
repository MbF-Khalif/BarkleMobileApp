import { JOIN_MISSION } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case JOIN_MISSION:
	        return action.joinMissions
	    default:
	        return state;
    }
};