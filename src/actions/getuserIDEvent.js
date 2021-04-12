import { GETUSERID_EVENT } from './types';
import api from './api';

export const getuseridEvent = getuseridEvent => ({
    type: GETUSERID_EVENT,
    getuseridEvent,
});

export const getuseridEventAction = (data,headers) => dispatch => 
	api.getuseridEventAction.getuserideventDataAction(data,headers).then(resData => dispatch(getuseridEvent(resData)))
	

