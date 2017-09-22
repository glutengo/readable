import React, { Component } from 'react';
import logo from './logo.svg';
import BackendAPI from './util/BackendAPI';
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from './actions';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import Home from './components/Home';
import { Route } from 'react-router-dom'
import './App.css';

const BACKEND_URL = 'http://localhost:3001'

class App extends Component {

  state = {
    backend: 'backend'
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchPosts());
  }

  render() {

    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreatePost} />
        <Route exact path="/posts/:id" component={PostDetails} />
      </div>
    );
  }
}

export default connect()(App);
