import { CHECK_GOINGMAYBE } from './types';
import api from './api';

export const checkgoingmaybe = checkgoingmaybe => ({
    type: CHECK_GOINGMAYBE,
    checkgoingmaybe,
});

export const checkgoingmaybeAction = (userID,eventsIds,headers) => dispatch => 
	api.checkgoingmaybeAction.checkgoingmaybeDataAction(userID,eventsIds,headers).then(resData => dispatch(checkgoingmaybe(resData)))
	

