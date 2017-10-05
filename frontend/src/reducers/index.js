import categories from './categories'
import comments from './comments'
import posts from './posts'
import sort from './sort'
import { combineReducers } from 'redux'

export default combineReducers({
    categories,
    posts,
    comments,
    sort
})