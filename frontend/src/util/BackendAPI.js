import uuid from 'uuid/v1'

const BACKEND_URL = 'http://localhost:3001'

export default {
    getCategories: () => {
        const url = `${BACKEND_URL}/categories`
        return fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
            .then((res) => { return (res.json()) })
    },

    getPosts: category => {
        const url = category ? `${BACKEND_URL}/${category}/posts` : `${BACKEND_URL}/posts`
        return fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
            .then((res) => { return (res.json()) })
    },

    createPost: post => {
        post.id = uuid()
        post.timestamp = Date.now()
        const url = `${BACKEND_URL}/posts`
        return fetch(url, {
            headers: {
                'Authorization': 'whatever-you-want',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'POST', body: JSON.stringify(post)
        })
            .then((res) => { return (res.json()) })
    },

    updatePost: post => {
        const url = `${BACKEND_URL}/posts/${post.id}`
        return fetch(url, {
            headers: {
                'Authorization': 'whatever-you-want',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'PUT', body: JSON.stringify(post)
        })
            .then((res) => { return (res.json()) })
    },

    deletePost: post => {
        const url = `${BACKEND_URL}/posts/${post.id}`
        return fetch(url, {
            headers: {
                'Authorization': 'whatever-you-want',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'DELETE'
        })
            .then((res) => { return (res.json()) })
    },

    getComments: postId => {
        const url = `${BACKEND_URL}/posts/${postId}/comments`
        return fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
            .then((res) => { return (res.json()) })
    },

    createComment: (postId, comment) => {
        comment.id = uuid()
        comment.timestamp = Date.now()
        comment.parentId = postId
        const url = `${BACKEND_URL}/comments`
        return fetch(url, {
            headers: {
                'Authorization': 'whatever-you-want',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'POST', body: JSON.stringify(comment)
        })
            .then((res) => { return (res.json()) })
    },

    updateComment: (comment) => {
        comment.timestamp = Date.now()
        const url = `${BACKEND_URL}/comments/${comment.id}`
        return fetch(url, {
            headers: {
                'Authorization': 'whatever-you-want',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'PUT', body: JSON.stringify(comment)
        })
            .then((res) => { return (res.json()) })

    },

    deleteComment: commentId => {
        const url = `${BACKEND_URL}/comments/${commentId}`
        return fetch(url, {
            headers: {
                'Authorization': 'whatever-you-want',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'DELETE'
        })
            .then((res) => { return (res.json()) })
    }
}