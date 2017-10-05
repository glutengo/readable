import { RECEIVE_POSTS } from './types'
import BackendAPI from '../util/BackendAPI'

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts: posts
})

export const fetchPosts = category => dispatch => BackendAPI
    .getPosts(category)
    .then(data => dispatch(receivePosts(data)))

export const addPost = post => dispatch => BackendAPI
    .createPost(post)
    .then(() => dispatch(fetchPosts()))

export const updatePost = post => dispatch => BackendAPI
    .updatePost(post)
    .then(() => dispatch(fetchPosts()))

export const deletePost = post => dispatch => BackendAPI
    .deletePost(post)
    .then(() => dispatch(fetchPosts()))