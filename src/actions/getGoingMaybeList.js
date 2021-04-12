import { GETGOINGMAYBE_LIST } from './types';
import api from './api';

export const getgoingmaybe = getgoingmaybe => ({
    type: GETGOINGMAYBE_LIST,
    getgoingmaybe,
});

export const getgoingmaybeAction = (evevtID,headers) => dispatch => 
	api.getgoingmaybeAction.getgoingmaybeDataAction(evevtID,headers).then(resData => dispatch(getgoingmaybe(resData)))
	

