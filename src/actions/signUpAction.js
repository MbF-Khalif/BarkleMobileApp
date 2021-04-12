import { SIGN_UP } from './types';
import api from './api';

export const  setSignUp= signUpDetails => ({
    type: SIGN_UP,
    signUpDetails,
});

export const createSignUpAction = (obj) => dispatch => 
	api.signUpAction.signUpDataAction(obj).then(resData => dispatch(setSignUp(resData)))
	

