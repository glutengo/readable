import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import CategoryNavigation from './CategoryNavigation'
import PostList from './post/PostList'
import EditPostDialog from './post/EditPostDialog'

class Home extends Component {

    state = {
        showCreatePost: false
    }

    render() {

        return (
            <div>
                <CategoryNavigation category={this.props.category}/>
                <PostList posts={this.props.posts} />
                <div className="floating-action-button-wrapper">
                <FloatingActionButton 
                    className="floating-action-button"
                    onClick={() => this.setState({showCreatePost: true})}>
                    <ContentAdd />
                </FloatingActionButton>
                </div>
                <EditPostDialog open={this.state.showCreatePost} 
                                category={this.props.category}
                                onClose={() => this.setState({showCreatePost: false})}/>
            </div>
        )
    }

}

const mapStateToProps = ({ categories, posts }, oldProps) => {
    return {
        ...oldProps,
        categories: categories,
        category: oldProps.match.params.category,
        posts: oldProps.match.params.category ? posts.filter(post => post.category === oldProps.match.params.category) : posts
    }
}

export default withRouter(connect(mapStateToProps)(Home))
