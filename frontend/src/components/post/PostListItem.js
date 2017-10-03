import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import PostActions from './PostActions'
import VoteScore from '../VoteScore'
import CommentCount from './CommentCount'

class PostListItem extends Component {

    render() {

        const { post } = this.props

        return (
            <div>
            <ListItem
                innerDivStyle={{paddingRight: '350px', lineHeight: '1.2em'}}
                style={{fontSize: '20px'}}
                primaryText={post.title}
                secondaryText={post.author + ' - ' + new Date(post.timestamp).toLocaleDateString() + ', ' + new Date(post.timestamp).toLocaleTimeString()}
                className="post-list-item"
                onClick={event => this.props.history.push(`/${post.category}/${post.id}`)}>
                <div className="post-info">
                    <VoteScore score={post.voteScore} />
                    <CommentCount count={post.comments} />
                </div>
                <PostActions post={post} />
            </ListItem>
            <Divider/>
            </div>
        )
    }
}

export default withRouter(PostListItem)