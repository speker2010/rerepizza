import { ADD_ITEM, DELETE_ITEM } from './actionTypes';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: {
            item
        }
    }
}

export function deleteItem(item) {
    return {
        type: DELETE_ITEM,
        payload: {
            item
        }
    }
}