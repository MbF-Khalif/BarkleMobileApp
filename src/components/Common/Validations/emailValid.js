import validator from 'validator';
import {isEmpty} from 'lodash';
import { EMPTY_EMAIL, VALID_EMAIL } from './constants';

const reg = /^[0-9]+$/;
const emailpregMatch=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;


export default function validateEmail(data) {
    const errors = {};
    
    if (validator.isEmpty(data.email)){
        errors.email = EMPTY_EMAIL;
    }
    if (!validator.isEmpty(data.email) && emailpregMatch.test(data.email)===!true) {
        errors.email = VALID_EMAIL;
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}