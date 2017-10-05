import { RECEIVE_COMMENTS } from './types'
import BackendAPI from '../util/BackendAPI'

export const receiveComments = (postId, comments) => ({
    type: RECEIVE_COMMENTS,
    comments: comments,
    postId: postId
})

export const fetchComments = postId => dispatch => BackendAPI
    .getComments(postId)
    .then(data => dispatch(receiveComments(postId, data)))

export const addComment = (postId, comment) => dispatch => BackendAPI
    .createComment(postId, comment)
    .then(() => dispatch(fetchComments(postId)))

export const updateComment = (comment) => dispatch => BackendAPI
    .updateComment(comment)
    .then(() => dispatch(fetchComments(comment.parentId)))

export const deleteComment = comment => dispatch => BackendAPI
    .deleteComment(comment.id)
    .then(() => dispatch(fetchComments(comment.parentId)))
