import { LEADER_BOARD } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case LEADER_BOARD:
	        return action.data
	    default:
	        return state;
    }
};