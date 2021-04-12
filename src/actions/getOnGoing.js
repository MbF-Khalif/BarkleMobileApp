import { GETONGOING_EVENT } from './types';
import api from './api';

export const getongoing = getongoing => ({
    type: GETONGOING_EVENT,
    getongoing,
});

export const getongoingAction = (evevtID,headers) => dispatch => 
	api.getongoingAction.getongoingDataAction(evevtID,headers).then(resData => dispatch(getongoing(resData)))
	

