import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Delete from 'material-ui/svg-icons/action/delete';
import Description from 'material-ui/svg-icons/action/description';
import { updatePost, deletePost } from '../actions';
import { Link } from 'react-router-dom'

class PostListItem extends Component {

    upVote() {
        this.props.dispatch(updatePost({ ...this.props.post, voteScore: this.props.post.voteScore + 1 }))
    }

    downVote() {
        this.props.dispatch(updatePost({ ...this.props.post, voteScore: this.props.post.voteScore - 1 }))
    }

    delete() {
        this.props.dispatch(deletePost(this.props.post))
    }

    render() {

        console.log(this.props.location);

        const { post } = this.props;

        return (
            <ListItem
                primaryText={post.title}
                >
                <IconButton onClick={() => this.upVote()}>
                    <ArrowUp />
                </IconButton>
                <IconButton onClick={() => this.downVote()}>
                    <ArrowDown />
                </IconButton>
                <IconButton onClick={() => this.delete()}>
                    <Delete />
                </IconButton>
            </ListItem>
        )
    }
}

export default connect()(PostListItem);