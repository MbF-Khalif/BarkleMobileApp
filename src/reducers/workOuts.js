import { GET_WORKOUTS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GET_WORKOUTS:
	        return action.workouts
	    default:
	        return state;
    }
};