import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import PostDetails from './post/PostDetails'
import Home from './Home'

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }

  render() {

    return (
      <div className="App">
        <AppBar title="Readable" 
                onTitleTouchTap={() => this.props.history.push('/')}
                titleStyle={{flex: 'initial', cursor: 'pointer'}}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/:category" component={Home} />
        <Route exact path="/:category/:id" component={PostDetails} />
      </div>
    )
  }
}

export default withRouter(connect(oldProps => oldProps, {fetchCategories, fetchPosts})(App))
