import React from 'react'
import { List } from 'material-ui/List'
import PostListItem from './PostListItem'

const PostList = (props) => {

    return props.posts && (<List className="posts">
        {props.posts.map(post => (
            <PostListItem key={post.id} post={post} />
        ))
        }
    </List>) || null
}

export default PostList