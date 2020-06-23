import { createStore } from 'redux';
import { combineReducers } from 'redux';
import rootReduser from './redusers';



export default createStore(rootReduser);