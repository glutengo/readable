import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'
import { sortPosts } from '../../actions'
import PostListItem from './PostListItem'
import {SORT_POST_OPTIONS} from '../../config'

class PostList extends Component {

    onChangeValue(key, value) {
        this.props.dispatch(sortPosts({...this.props.sort, [key]: value}))
    }

    render() {
        return (<div>
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Posts"/>
                </ToolbarGroup>
                <ToolbarGroup
                    lastChild={true}>
                    <ToolbarTitle text="sort by" style={{fontSize: 15, height: 48}}/>
                    <DropDownMenu value={this.props.sort.by} onChange={(event, index, value) => this.onChangeValue('by', value)}>
                        { SORT_POST_OPTIONS.map((option, key) => (
                            <MenuItem value={option} key={key} primaryText={option}/>
                        ))}
                    </DropDownMenu>
                    <ToolbarTitle text="sort direction" style={{fontSize: 15, height: 48}}/>

                    <IconButton onClick={() => this.onChangeValue('reverse', !this.props.sort.reverse)}>
                        { this.props.sort.reverse ? <ArrowUpward/> : <ArrowDownward/> }
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
            <List className="posts">
                {this.props.posts
                    .sort((postA, postB) => (this.props.sort.reverse ? -1 : 1) * (postB[this.props.sort.by] - postA[this.props.sort.by]))
                    .map(post => (
                    <PostListItem key={post.id} post={post} />
                ))
                }
            </List>
        </div>)
    }
}

const mapStateToProps = ({sort}, oldProps) => ({
    ...oldProps,
    sort: sort.posts
})

export default connect(mapStateToProps)(PostList)