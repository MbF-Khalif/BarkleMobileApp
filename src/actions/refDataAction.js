import { GET_INSTRUCTOR, GET_CLASS } from './types';
import api from './api';

export const getInstructor = instructor => ({
    type: GET_INSTRUCTOR,
    instructor,
});

export const getInstructorAction = (headers) => dispatch => 
	api.getInstructor.getInstructorData(headers).then(resData => dispatch(getInstructor(resData)))

export const getClass = pelotonClass => ({
    type: GET_CLASS,
    pelotonClass,
});

export const getClassAction = (headers) => dispatch => 
	api.getClass.getClassData(headers).then(resData => dispatch(getClass(resData)))
	

