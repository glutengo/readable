import { SORT_POSTS, SORT_COMMENTS } from './types'

export const sortPosts = sortConfig => ({
    ...sortConfig,
    type: SORT_POSTS
})

export const sortComments = sortConfig => ({
    ...sortConfig,
    type: SORT_COMMENTS
})