import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { addComment, updateComment } from '../../actions/comments'
import EditComment from './EditComment'

const EMPTY_COMMENT = {
    body: '',
    author: ''
}

class EditCommentDialog extends Component {

    state = {
        comment: EMPTY_COMMENT
    }

    commentChanged(comment) {
        this.setState({comment: comment})
    }

    handleClose() {
        this.props.onClose()
    }

    handleSave() {
        if (this.props.comment) {
            this.props.updateComment(this.state.comment)
        } else {
            this.props.addComment(this.state.comment)
        }
        this.props.onClose();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comment) {
            this.setState({comment: nextProps.comment})
        } else {
            this.setState({comment: EMPTY_COMMENT})
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
                title={this.props.comment ? 'Update comment' : 'Create new comment'}
                actions={actions}
                open={this.props.open}
                autoScrollBodyContent={true}
                onRequestClose={() => this.handleClose()}>
                <EditComment comment={this.state.comment} onChange={comment => this.commentChanged(comment)}/>
            </Dialog>)
    }
}

export default connect(oldProps => oldProps, {updateComment, addComment})(EditCommentDialog)