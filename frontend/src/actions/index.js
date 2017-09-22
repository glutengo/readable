import BackendAPI from '../util/BackendAPI'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories: categories
    }
}

export const fetchCategories = () => dispatch => BackendAPI
    .getCategories()
    .then(data => dispatch(receiveCategories(data.categories)))

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts
    }
}

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

export function receiveComments(postId, comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments: comments,
        postId: postId
    }
}

export const fetchComments = postId => dispatch => BackendAPI
    .getComments(postId)
    .then(data => dispatch(receiveComments(postId, data)))

export const addComment = (postId, comment) => dispatch => BackendAPI
    .createComment(postId, comment)
    .then(() => dispatch(fetchComments(postId)))