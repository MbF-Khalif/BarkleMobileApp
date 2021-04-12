import { GETALL_CHALLENGEID } from './types';
import api from './api';

export const getAllChallengeId = getAllChallengeId => ({
    type: GETALL_CHALLENGEID,
    getAllChallengeId,
});

export const getAllChallengeIdAction = (challID,userId,headers) => dispatch => 
	api.getAllChallengeIdAction.getAllChallengeIdDataAction(userId,challID,headers).then(resData => dispatch(getAllChallengeId(resData)))
	

