import {RECEIVE_COMMENTS} from '../actions/types'

export default (state = {}, action) => {
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