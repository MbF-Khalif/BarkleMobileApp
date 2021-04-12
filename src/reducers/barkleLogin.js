import { BARKLELOG_IN } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case BARKLELOG_IN:
	        return action.barkleLoginDetails
	    default:
	        return state;
    }
};