import { CHANGE_PASSWORD } from './types';
import api from './api';

export const changePassword = changePassword => ({
    type: CHANGE_PASSWORD,
    changePassword,
});

export const changePasswordAction = (data) => dispatch => 
	api.changePasswordAction.changePasswordDataAction(data).then(resData => dispatch(changePassword(resData)))
	

