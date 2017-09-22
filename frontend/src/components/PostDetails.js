import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { addPost, fetchComments } from '../actions';
import { List, ListItem } from 'material-ui/List';
import CreateComment from './CreateComment';
import { withRouter } from 'react-router-dom'

class PostDetails extends Component {

    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.match.params.id));
    }

    render() {
        const { post, comments } = this.props
        return post && (
            <div>
                <h1>{post && post.title}</h1>
                <p> {post.title} </p>
                {comments && comments.length && (
                    <List> {
                        comments.map(comment => (
                            <ListItem primaryText={comment.body} key={comment.id} />

                        ))
                    }

                    </List>
                )}
                <CreateComment postId={post.id} />
            </div>
        ) || null
    }
}
const mapStateToProps = ({ posts, comments }, oldProps) => {
    const newProps = {
        ...oldProps,
        post: posts.find(post => post.id === oldProps.match.params.id),
        comments: comments[oldProps.match.params.id]
    }
    return newProps;
}

export default connect(mapStateToProps)(withRouter(PostDetails));