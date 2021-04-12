import { FORGOT_PASSWORD } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case FORGOT_PASSWORD:
	        return action.forgotPassword
	    default:
	        return state;
    }
};