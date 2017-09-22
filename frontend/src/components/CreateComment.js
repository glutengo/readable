import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { addComment } from '../actions';
class CreatePost extends Component {

    state = {
        body: '',
        author: ''
    }

    valueChanged(key, value) {
        this.setState({ [key]: value });
    }

    saveComment() {
        this.props.dispatch(addComment(this.props.postId, this.state));
    }

    render() {
        return (
            <div className="create-comment">
                <TextField
                    fullWidth={true}
                    floatingLabelText="body"
                    value={this.state.body}
                    multiLine={true}
                    onChange={e => this.valueChanged('body', e.target.value)} />
                <TextField
                    fullWidth={true}
                    floatingLabelText="author"
                    value={this.state.author}
                    onChange={e => this.valueChanged('author', e.target.value)} />
                <RaisedButton
                    label="Save"
                    onClick={e => this.saveComment()}
                />
            </div>
        );
    }
}

export default connect()(CreatePost);