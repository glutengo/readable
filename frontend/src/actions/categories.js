import {RECEIVE_CATEGORIES} from './types'
import BackendAPI from '../util/BackendAPI'

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories: categories
})

export const fetchCategories = () => dispatch => BackendAPI
    .getCategories()
    .then(data => dispatch(receiveCategories(data.categories)))