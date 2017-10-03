import React, { Component } from 'react'
import { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider';
import CommentActions from './CommentActions'
import VoteScore from '../VoteScore'

class CommentListItem extends Component {

    render() {

        const { comment } = this.props

        return (
            <div>
            <ListItem
                style={{cursor: 'default'}}
                innerDivStyle={{paddingRight: '300px', lineHeight: '1.2em'}}
                primaryText={comment.body}
                secondaryText={comment.author + ' - ' + new Date(comment.timestamp).toLocaleDateString() + ', ' + new Date(comment.timestamp).toLocaleTimeString()}
                className="post-list-item">
                <div className="post-info">
                    <VoteScore score={comment.voteScore} />
                </div>
                <CommentActions comment={comment} />
            </ListItem>
            {!this.props.last && <Divider/>}
            </div>
        )
    }
}

export default CommentListItem