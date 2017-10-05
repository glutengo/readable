import { SORT_POSTS, SORT_COMMENTS } from '../actions/types'

export default (
    state = {
        posts: { by: 'voteScore', reverse: false },
        comments: { by: 'voteScore', reverse: false }
    },
    action) => {
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