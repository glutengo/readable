import React, { Component } from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        return (
            <div>
                <div className="categories">
                    {this.props.categories.map(category => (
                        <div key={category.name}>{category.name}</div>
                    ))}
                </div>
                <PostList posts={this.props.posts} />
            </div>
        )
    }

}

const mapStateToProps = ({ categories, posts }, oldProps) => {
    return {
        ...oldProps,
        categories: categories,
        posts: posts
    }
}

export default connect(mapStateToProps)(Home);
