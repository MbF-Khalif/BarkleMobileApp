import { GET_INSTRUCTOR, GET_CLASS_TYPE, GET_CLASS_TIME } from './types';
import api from './api';

export const getInstructor = instructor => ({
    type: GET_INSTRUCTOR,
    instructor,
});

export const getInstructorAction = (headers) => dispatch => 
	api.getInstructor.getInstructorData(headers).then(resData => dispatch(getInstructor(resData)))

export const classType = classType => ({
    type: GET_CLASS_TYPE,
    classType,
});

export const classTypeAction = (headers) => dispatch => 
	api.classType.classTypeData(headers).then(resData => dispatch(classType(resData)))
	
export const classTime = classTime => ({
    type: GET_CLASS_TIME,
    classTime,
});

export const classTimeAction = (headers) => dispatch => 
	api.classTime.classTimeData(headers).then(resData => dispatch(classTime(resData)))
	

