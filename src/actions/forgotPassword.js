import { FORGOT_PASSWORD } from './types';
import api from './api';

export const forgotPassword = forgotPassword => ({
    type: FORGOT_PASSWORD,
    forgotPassword,
});

export const forgotPasswordAction = (data) => dispatch => 
	api.forgotPasswordAction.forgotDataAction(data).then(resData => dispatch(forgotPassword(resData)))
	

