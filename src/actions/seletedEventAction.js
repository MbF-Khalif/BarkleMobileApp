import { ADD_ITEM } from './types';

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
});

export const addItemAction = (data) => dispatch => {
    dispatch(addItem(data));
};


