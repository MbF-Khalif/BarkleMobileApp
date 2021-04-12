import { LOG_IN } from './types';
import api from './api';

export const setLogin = loginDetails => ({
    type: LOG_IN,
    loginDetails,
});

export const createLoginAction = (obj) => dispatch => 
	api.loginAction.loginDataAction(obj).then(resData => dispatch(setLogin(resData)))
	

