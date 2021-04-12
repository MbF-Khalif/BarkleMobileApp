import validator from 'validator';
import {isEmpty} from 'lodash';

import { VALID_EVENT, EMPTY_TIME, VALID_DATE} from './constants';

export default function validateScheme(data){
    const errors = {};
    
    if (isEmpty(data.name)) {
        errors.name = VALID_EVENT;
    }
    if (validator.isEmpty(data.eventdate)) {
        errors.eventdate = VALID_DATE;
    }
    if (validator.isEmpty(data.time)){
        errors.time = EMPTY_TIME;
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}