import { GETMAYBE_EVENT } from './types';
import api from './api';

export const getmaybe = getmaybe => ({
    type: GETMAYBE_EVENT,
    getmaybe,
});

export const getmaybeAction = (evevtID,headers) => dispatch => 
	api.getmaybeAction.getmaybeDataAction(evevtID,headers).then(resData => dispatch(getmaybe(resData)))
	

