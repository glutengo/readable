import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'
import { sortComments } from '../../actions'
import CommentListItem from './CommentListItem'
import { SORT_COMMENT_OPTIONS} from '../../config'

class CommentList extends Component {

    onChangeValue(key, value) {
        this.props.dispatch(sortComments({ ...this.props.sort, [key]: value }))
    }

    render() {

        const sortedComments = (this.props.comments && this.props.comments
            .sort((commentA, commentB) => (this.props.sort.reverse ? -1 : 1) * (commentA[this.props.sort.by] - commentB[this.props.sort.by]))) || []


        return (<div>
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Comments" />
                </ToolbarGroup>
                <ToolbarGroup
                    lastChild={true}>
                    <ToolbarTitle text="sort by" style={{fontSize: 15, height: 48}}/>
                    <DropDownMenu value={this.props.sort.by} onChange={(event, index, value) => this.onChangeValue('sortBy', value)}>
                        {SORT_COMMENT_OPTIONS.map((option, key) => (
                            <MenuItem value={option} key={key} primaryText={option} />
                        ))}
                    </DropDownMenu>
                    <ToolbarTitle text="sort direction" style={{fontSize: 15, height: 48}}/>

                    <IconButton onClick={() => this.onChangeValue('reverse', !this.props.sort.reverse)}>
                        {this.props.sort.reverse ? <ArrowUpward /> : <ArrowDownward />}
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
            {sortedComments.length ? <List className="comments">
                {sortedComments.map((comment, index) => (
                    <CommentListItem key={comment.id} comment={comment} last={index === sortedComments.length - 1} />
                ))
                }
            </List> : <div style={{padding: 10}}>Sorry, no comments yet!</div>}
        </div>)
    }
}

const mapStateToProps = ({ sort }, oldProps) => ({
    ...oldProps,
    sort: sort.comments
})

export default connect(mapStateToProps)(CommentList)