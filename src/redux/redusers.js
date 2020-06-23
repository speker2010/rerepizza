import { combineReducers } from 'redux';
import { ADD_ITEM, DELETE_ITEM } from './actionTypes';

function basket (state = {}, action) {
    switch(action.type) {
        case ADD_ITEM: {
            let count = 0;
            let item = action.payload.item;
            let id = getId(item);
            if (state[id]) {
                count = state[id].count;
            }
            return {
                ...state,
                [id]: {
                    ...item,
                    count: count + 1
                }
            };
        }
        case DELETE_ITEM:
            let count = 0;
            let id = getId(action.payload.item);
            if (state[id]) {
                count = state[id].count;
            }
            return {
                ...state,
                [id]: {
                    ...action.payload.item,
                    count: Math.max(count - 1, 0)
                }
            };
        default:
            return state;
    }
}

export function getId(item) {
    let id = item.id;
    if (item.size) {
        id += `-${item.size}`;
    }
    if (item.dough) {
        id += `-${item.dough}`;
    }
    if (item.options) {
        id += item.options.reduce((accumulator, current) => `${accumulator}-${current}`, '');
    }
    if (item.extensions) {
        id += item.options.reduce((accumulator, current) => `${accumulator}-${current}`, '');
    }
    return id;
}

const img = 'http://placehold.it/292x292/';
const productList = [
    {
        id: 'idproduct1',
        title: 'Product 1 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 100.00,
        options: [],
        extends: [],
        sizes: [],
        doughs: []
    },
    {
        id: 'idproduct2',
        title: 'Product 2 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 300.00
    },
    {
        id: 'idproduct3',
        title: 'Product 3 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 300.00
    },
    {
        id: 'idproduct4',
        title: 'Product 4 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 250.00
    },
];

function products(state = productList, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    basket,
    products
});