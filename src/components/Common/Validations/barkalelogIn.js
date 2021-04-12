import validator from 'validator';
import {isEmpty} from 'lodash';
import { EMPTY_EMAIL, VALID_EMAIL, EMPTY_PASSWORD,PASSWORD_RESTRICT } from './constants';

const reg = /^[0-9]+$/;
const emailpregMatch=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;


export default function validateLoginScreen(data) {
    const errors = {};
    
    if (validator.isEmpty(data.email)){
        errors.email = EMPTY_EMAIL;
    }
    if (!validator.isEmpty(data.email) && emailpregMatch.test(data.email)===!true) {
        errors.email = VALID_EMAIL;
    }
     if(validator.isEmpty(data.password)) {
        errors.password = EMPTY_PASSWORD
    }
     if((data.password).length !==0 && (data.password).length <6){
        errors.password = PASSWORD_RESTRICT;
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}