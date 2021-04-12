import { LEADER_BOARD } from './types';
import api from './api';

export const leaderBoard = data => ({
    type: LEADER_BOARD,
    data,
});

export const leaderBoardAction = () => dispatch => 
	api.getLeaderboard.getLeaderboardAction().then(resData => dispatch(leaderBoard(resData)))
	

