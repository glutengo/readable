import { RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_COMMENTS, SORT_POSTS, SORT_COMMENTS } from '../actions'
import { combineReducers } from 'redux'

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const { categories } = action
            return categories
        default:
            return state
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const { posts } = action
            return posts
        default:
            return state
    }
}

function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            const { postId, comments } = action
            return {
                ...state,
                [postId]: comments
            }
        default:
            return state
    }
}

function sort(state = { posts: { by: 'voteScore', reverse: false }, comments: { by: 'voteScore', reverse: false } }, action) {
    const { type, ...sortConfig } = action
    switch (type) {
        case SORT_POSTS:
            return {
                ...state,
                posts: sortConfig
            }
        case SORT_COMMENTS:
            return {
                ...state,
                comments: sortConfig
            }
        default:
            return state;
    }
}



export default combineReducers({
    categories,
    posts,
    comments,
    sort
})