import { BARKLELOG_IN } from './types';
import api from './api';

export const setBarkleLogin = barkleLoginDetails => ({
    type: BARKLELOG_IN,
    barkleLoginDetails,
});

export const createBarkleLoginAction = (obj) => dispatch => 
	api.barkleLoginAction.barkleLoginDataAction(obj).then(resData => dispatch(setBarkleLogin(resData)))
	

