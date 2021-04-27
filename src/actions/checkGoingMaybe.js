import { CHECK_GOINGMAYBE } from './types';
import api from './api';

export const checkgoingmaybe = checkgoingmaybe => ({
    type: CHECK_GOINGMAYBE,
    checkgoingmaybe,
});

export const checkgoingmaybeAction = (eventsIds,userID,headers) => dispatch => 
	api.checkgoingmaybeAction.checkgoingmaybeDataAction(eventsIds,userID,headers).then(resData => dispatch(checkgoingmaybe(resData)))
	

