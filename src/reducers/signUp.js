import { SIGN_UP } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case SIGN_UP:
	        return action.signUpDetails
	    default:
	        return state;
    }
};