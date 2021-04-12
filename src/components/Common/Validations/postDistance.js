import validator from 'validator';
import {isEmpty} from 'lodash';

import { ENTER_ACTIVITY,EMPTY_ACTIVITYTIME, VALID_ACTIVITYIMG,VALID_TIME } from './constants';

export default  function validateEditprofile(data){
    const errors = {};

    if(validator.isEmpty(data.activity)){
        errors.activity = ENTER_ACTIVITY;
    }
    if (validator.isEmpty(data.activityTime)){
        errors.activityTime = EMPTY_ACTIVITYTIME;
    }
    if(validator.isEmpty(data.time)){
        errors.time = VALID_TIME;
    }
    if(validator.isEmpty(data.activityImg)){
        errors.activityImg = VALID_ACTIVITYIMG;
    }

    // if(pinPregmatch.test(data.pincode)!==true){
    //     errors.pincode = VALID_PINCODE;
    // } 
    // if (isEmpty(data.state)) {
    //     errors.state = VALID_STATE;
    // }  
    return {
        errors,
        isValid: isEmpty(errors),
    };
}