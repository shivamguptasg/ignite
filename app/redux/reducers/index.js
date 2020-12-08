import { combineReducers } from 'redux';
import getBookList from './getBookList'
import loader from './loader'

const allReducers = combineReducers({
    getBookList,
    loader
})

export default allReducers;