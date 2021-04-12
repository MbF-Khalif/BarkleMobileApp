import { GET_USER } from './types';
import api from './api';

export const getUser = getUser => ({
    type: GET_USER,
    getUser,
});

export const getUserAction = (userId,headers) => dispatch => 
	api.getUserAction.getUserDataAction(userId,headers).then(resData => dispatch(getUser(resData)))
	

