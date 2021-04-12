import validator from 'validator';
import {isEmpty} from 'lodash';

import { VALID_MISSIONS, END_DATE, MISSIONS_DATE,MISSION_VALUE} from './constants';

export default function validateCreateMissions(data){
    const errors = {};
    
    if (isEmpty(data.name)) {
        errors.name = VALID_MISSIONS;
    }
    if (validator.isEmpty(data.eventdate)) {
        errors.eventdate = MISSIONS_DATE;
    }
    if (validator.isEmpty(data.endDate)){
        errors.endDate = END_DATE;
    }
    // if (validator.isEmpty(data.missionValue)){
    //     errors.missionValue = MISSION_VALUE;
    // }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}