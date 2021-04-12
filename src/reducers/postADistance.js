import { POSTA_DISTANCE } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case POSTA_DISTANCE:
	        return action.postADistance
	    default:
	        return state;
    }
};