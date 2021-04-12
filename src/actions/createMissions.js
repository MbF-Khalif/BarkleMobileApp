import { CREATE_MISSIONS } from './types';
import api from './api';

export const createMissions = createMissions => ({
    type: CREATE_MISSIONS,
    createMissions,
});

export const createMissionsAction = (data,headers) => dispatch => 
	api.createMissionsAction.createMissionsDataAction(data,headers).then(resData => dispatch(createMissions(resData)))
	

