import { GETALL_CHALLENGE } from './types';
import api from './api';

export const getAllChallenge = getAllChallenge => ({
    type: GETALL_CHALLENGE,
    getAllChallenge,
});

export const getAllChallengeAction = (headers) => dispatch => 
	api.getAllChallengeAction.getAllChallengeDataAction(headers).then(resData => dispatch(getAllChallenge(resData)))
	

