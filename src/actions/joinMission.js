import { JOIN_MISSION } from './types';
import api from './api';

export const joinMissions = joinMissions => ({
    type: JOIN_MISSION,
    joinMissions,
});

export const joinMissionsAction = (userId,missionID,headers) => dispatch => 
	api.joinMissionsAction.joinMissionsDataAction(userId,missionID,headers).then(resData => dispatch(joinMissions(resData)))
	

