import { ADD_ITEM } from '../actions/types';
import { isEmpty } from 'lodash';

const initialstate = {    
    items: []    
}; 

export default (state = initialstate, action = {}) => {
    switch (action.type) {
        case ADD_ITEM:
        return {    
            ...state,    
            items: action.item   
        }; 
        default:
            return state;
    }
};
