import { POSTA_DISTANCE } from './types';
import api from './api';

export const postADistance = postADistance => ({
    type: POSTA_DISTANCE,
    postADistance,
});

export const postADistanceAction = (data,headers) => dispatch => 
	api.postADistanceAction.postADistanceDataAction(data,headers).then(resData => dispatch(postADistance(resData)))
	

