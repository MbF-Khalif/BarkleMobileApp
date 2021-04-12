import { GET_TEAMS } from './types';
import api from './api';

export const getTeams = getTeams => ({
    type: GET_TEAMS,
    getTeams,
});

export const getTeamsAction = (headers) => dispatch => 
	api.getTeamsAction.getTeamsDataAction(headers).then(resData => dispatch(getTeams(resData)))
	

