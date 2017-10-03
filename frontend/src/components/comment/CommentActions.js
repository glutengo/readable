import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
import Delete from 'material-ui/svg-icons/action/delete'
import Settings from 'material-ui/svg-icons/action/settings'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { updateComment, deleteComment } from '../../actions'
import EditCommentDialog from './EditCommentDialog'
import {ICON_STYLE, ACTION_MENU_STYLE} from '../../config'

class PostActions extends Component {

    state = {
        showEdit: false,
        showDelete: false
    }

    upVote(event) {
        event.stopPropagation()
        this.props.dispatch(updateComment({ ...this.props.comment, voteScore: this.props.comment.voteScore + 1 }))
    }

    downVote(event) {
        event.stopPropagation()
        this.props.dispatch(updateComment({ ...this.props.comment, voteScore: this.props.comment.voteScore - 1 }))
    }

    delete(event) {
        event.stopPropagation()
        this.props.dispatch(deleteComment(this.props.comment))
    }

    edit(event) {
        event.stopPropagation()
        this.setState({ showEdit: true })
    }

    render() {

        const { comment } = this.props;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.setState({ showDelete: false })}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onClick={event => { this.delete(event) && this.setState({ showDelete: false }) }}
            />,
        ]

        return (
            <div style={ACTION_MENU_STYLE}>
                <div className="menu-expanded">
                    <IconButton onClick={event => this.upVote(event)} iconStyle={ICON_STYLE}>
                        <ArrowUp />
                    </IconButton>
                    <IconButton onClick={event => this.downVote(event)} iconStyle={ICON_STYLE}>
                        <ArrowDown />
                    </IconButton>
                    <IconButton onClick={event => this.edit(event)} iconStyle={ICON_STYLE}>
                        <Settings />
                    </IconButton>
                    <IconButton onClick={event => { event.stopPropagation() && this.setState({ showDelete: true }) }} iconStyle={ICON_STYLE}>
                        <Delete />
                    </IconButton>
                </div>
                <IconMenu
                    className="menu-collapsed"
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                >
                    <MenuItem primaryText="UpVote" onClick={event => this.upVote(event)} />
                    <MenuItem primaryText="DownVote" onClick={event => this.downVote(event)} />
                    <MenuItem primaryText="Delete" onClick={event => this.setState({ showDelete: true })} />
                    <MenuItem primaryText="Edit" onClick={event => this.edit(event)} />
                </IconMenu>
                <EditCommentDialog comment={comment} 
                                   open={this.state.showEdit} 
                                   onClose={() => this.setState({ showEdit: false })} />
                <Dialog title="Are you sure you want to delete this comment?"
                        actions={actions}
                        open={this.state.showDelete}
                        onRequestClose={() => this.setState({ showDelete: false })} />
            </div>
        )
    }
}

export default connect()(PostActions)

