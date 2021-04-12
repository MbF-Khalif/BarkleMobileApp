import { GET_WORKOUTS } from './types';
import api from './api';

export const setWorkouts = workouts => ({
		type: GET_WORKOUTS,
		workouts
});

export const getWorkouts = (id) => dispatch =>
	api.workoutsAction.workoutsDataAction(id).then(resData => dispatch(setWorkouts(resData)))
