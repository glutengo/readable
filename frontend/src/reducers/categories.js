import {RECEIVE_CATEGORIES} from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const { categories } = action
            return categories
        default:
            return state
    }
}