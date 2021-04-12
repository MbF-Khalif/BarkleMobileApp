import { GOINGMAYBE_EVENT } from './types';
import api from './api';

export const goingmaybeEvent = goingmaybeEvent => ({
    type: GOINGMAYBE_EVENT,
    goingmaybeEvent,
});

export const goingmaybeEventAction = (data,headers) => dispatch => 
	api.goingmaybeEventAction.eventgoingmaybeAction(data,headers).then(resData => dispatch(goingmaybeEvent(resData)))
	

