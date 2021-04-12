import { EVENT_BY_ID } from './types';
import api from './api';

export const eventById = event => ({
    type: EVENT_BY_ID,
    event,
});

export const eventByIdAction = (id) => dispatch => 
	api.eventByIdAction.eventByIdData(id).then(resData => dispatch(eventById(resData)))
	

