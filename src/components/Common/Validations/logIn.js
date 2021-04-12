import validator from 'validator';
import {isEmpty} from 'lodash';
import { INVALID_MOBILE, MOBILE_RESTRICT, INVALID_PASSWORD,  EMPTY_PASSWORD, INVALID_NAME } from './constants';

const reg = /^[0-9]+$/;

export default function validateLoginScreen(data) {
    const errors = {};
    
    // if (reg.test(data.mobile) !== true) {
    //     errors.mobile = INVALID_MOBILE;
    // }
    // if((data.mobile).length !==0 && (data.mobile).length <10 || (data.mobile).length >10 ){
    //     errors.mobile = MOBILE_RESTRICT;
    // }
    // if (validator.isEmpty(data.password)) {
    //     errors.password = INVALID_PASSWORD;
    // }
    if(validator.isEmpty(data.name)) {
        errors.name = INVALID_NAME
    }
     if(validator.isEmpty(data.password)) {
        errors.password = EMPTY_PASSWORD
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}