import { GETALL_EVENT } from './types';
import api from './api';

export const getAllEvent = getAllEvent => ({
    type: GETALL_EVENT,
    getAllEvent,
});

export const getAllEventAction = (headers) => dispatch => 
	api.getAllEventAction.getAllDataAction(headers).then(resData => dispatch(getAllEvent(resData)))
	

