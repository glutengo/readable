import { RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_COMMENTS } from '../actions'
import { combineReducers } from 'redux'

function categories (state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES :
            const { categories } = action
            return categories
        default :
            return state
    }
}

function posts (state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS :
            const { posts } = action
            return posts
        default :
            return state
    }
}

function comments (state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS :
            const { postId, comments } = action
            return {
                ...state,
                [postId]: comments
            }
        default :
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    comments
})