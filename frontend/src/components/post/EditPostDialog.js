import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import { addPost, updatePost } from '../../actions'
import EditPost from './EditPost'
import FlatButton from 'material-ui/FlatButton'

const EMPTY_POST = {
    category: null,
    title: '',
    body: '',
    author: ''
}

class EditPostDialog extends Component {

    state = {
        post: EMPTY_POST
    }

    postChanged(post) {
        this.setState({post: post})
    }

    handleClose() {
        this.props.onClose()
    }

    handleSave() {
        if (this.props.post) {
            this.props.dispatch(updatePost(this.state.post))
        } else {
            this.props.dispatch(addPost(this.state.post))
        }
        this.props.onClose();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post) {
            this.setState({post: nextProps.post})
        } else {
            this.setState({post: {...EMPTY_POST, category: this.props.category}})
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.handleClose()}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={() => this.handleSave()}
            />,
        ];

        return (
            <Dialog
                title={this.props.post ? 'Update post' : 'Create new post'}
                actions={actions}
                open={this.props.open}
                autoScrollBodyContent={true}
                onRequestClose={() => this.handleClose()}>
                <EditPost post={this.state.post} onChange={post => this.postChanged(post)}/>
            </Dialog>)
    }
}

export default connect()(EditPostDialog)