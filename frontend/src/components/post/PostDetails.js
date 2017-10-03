import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import Person from 'material-ui/svg-icons/social/person'
import { fetchComments, addComment } from '../../actions'
import EditComment from '../comment/EditComment'
import PostActions from './PostActions'
import VoteScore from '../VoteScore'
import CommentList from '../comment/CommentList'

const EMPTY_COMMENT = {
    body: '',
    author: ''
}

class PostDetails extends Component {

    state = {
        comment: EMPTY_COMMENT
    }

    commentChanged(comment) {
        this.setState({ comment: comment })
    }

    saveComment() {
        this.props.dispatch(addComment(this.props.post.id, this.state.comment))
        this.setState({ comment: EMPTY_COMMENT })
    }

    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.match.params.id))
    }

    render() {
        const { post, comments } = this.props
        console.log(this.props);
        return (post && (
            <div>
                <Card>
                    <CardHeader
                        avatar={<Person />}
                        title={post.title}
                        subtitle={post.author + ' - '+ new Date(post.timestamp).toLocaleDateString() + ', ' + new Date(post.timestamp).toLocaleTimeString()}
                        titleStyle={{fontSize: 24}}>
                        <div className="post-info">
                            <VoteScore score={post.voteScore} />
                        </div>
                        <PostActions post={post} />
                    </CardHeader>
                    <CardText>
                        {post.body}
                    </CardText>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CommentList comments={comments } />
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <Toolbar>
                        <ToolbarGroup>
                            <ToolbarTitle text="Add Comment" />
                        </ToolbarGroup>
                    </Toolbar>
                    <CardText>
                        <EditComment
                            postId={post.id}
                            onChange={comment => this.commentChanged(comment)}
                            comment={this.state.comment} />
                    </CardText>
                    <CardActions>
                        <FlatButton
                            primary={true}
                            label="Save"
                            onClick={e => this.saveComment()}
                        />
                    </CardActions>
                </Card>
            </div>
        )) || null
    }
}
const mapStateToProps = ({ posts, comments }, oldProps) => {
    const newProps = {
        ...oldProps,
        post: posts.find(post => post.id === oldProps.match.params.id),
        comments: comments[oldProps.match.params.id]
    }
    return newProps
}

export default connect(mapStateToProps)(withRouter(PostDetails))