import { CREATE_EVENT, EDIT_EVENT } from './types';
import api from './api';

export const createEvent = createEvent => ({
    type: CREATE_EVENT,
    createEvent,
});

export const createEventAction = (data,headers) => dispatch => 
	api.createEventAction.eventDataAction(data,headers).then(resData => dispatch(createEvent(resData)))
	

export const editEvent = editEvent => ({
    type: EDIT_EVENT,
    editEvent,
});

export const editEventAction = (data,headers) => dispatch => 
	api.editEventAction.eventDataAction(data,headers).then(resData => dispatch(editEvent(resData)))
	

