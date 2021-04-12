import validator from 'validator';
import {isEmpty} from 'lodash';
import { INVALID_MOBILE, MOBILE_RESTRICT,EMPTY_EMAIL,VALID_EMAIL, INVALID_PASSWORD, PASSWORD_RESTRICT, INVALID_NAME, PASSWORD_MISMATCH, EMPTY_MOBILE, EMPTY_PASSWORD, EMPTY_CONFIRM_PASSWORD }  from './constants';

const reg = /^[0-9]+$/;
const regSpace = /^\s+$/;
const emailpregMatch=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;

export default function validateSignupScreen(data) {
    const errors = {};

  
    if (validator.isEmpty(data.email)){
        errors.email = EMPTY_EMAIL;
    }
    if (!validator.isEmpty(data.email) && emailpregMatch.test(data.email)===!true) {
        errors.email = VALID_EMAIL;
    }

    if (reg.test(data.mobile)!== true) {
        errors.mobile = INVALID_MOBILE;
    }
    if((data.mobile).length !== 0 && (data.mobile).length < 10 || (data.mobile).length >10 ){
        errors.mobile = MOBILE_RESTRICT;
    }
    if (validator.isEmpty(data.password)) {
        errors.password = INVALID_PASSWORD;
    }
    if((data.password).length !==0 && (data.password).length <6){
        errors.password = PASSWORD_RESTRICT;
    }
   
    if(validator.isEmpty(data.mobile)) {
        errors.mobile = EMPTY_MOBILE
    }
    if(validator.isEmpty(data.password)) {
        errors.password = EMPTY_PASSWORD
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
