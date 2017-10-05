import {RECEIVE_POSTS} from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            const { posts } = action
            return posts
        default:
            return state
    }
}