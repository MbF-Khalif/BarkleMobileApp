import { GETALL_MISSIONS } from './types';
import api from './api';

export const getAllMissions = getAllMissions => ({
    type: GETALL_MISSIONS,
    getAllMissions,
});

export const getAllMissionsAction = (headers) => dispatch => 
	api.getAllMissionsAction.getAllMissionsDataAction(headers).then(resData => dispatch(getAllMissions(resData)))
	

