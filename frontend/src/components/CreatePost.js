import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { addPost } from '../actions';
class CreatePost extends Component {

    state = {
        category: null,
        title: '',
        body: '',
        author: ''
    }

    valueChanged(key, value) {
        this.setState({ [key]: value });
    }

    savePost() {
        this.props.dispatch(addPost(this.state));
    }

    render() {
        return (
            <div className="create-post">
                <TextField
                    fullWidth={true}
                    floatingLabelText="title"
                    value={this.state.title}
                    onChange={e => this.valueChanged('title', e.target.value)} />
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
                <SelectField
                    fullWidth={true}
                    floatingLabelText="Category"
                    value={this.state.category}
                    onChange={(e, value) => this.valueChanged('category', this.props.categories[value].name)}
                >
                    {this.props.categories.map(category => (
                        <MenuItem key={category.name} value={category.name} primaryText={category.name} />
                    ))}
                </SelectField>
                <RaisedButton
                    label="Save"
                    onClick={e => this.savePost()}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ categories }, oldProps) => {
  return {
    ...oldProps,
    categories: categories
  }
}

export default connect(mapStateToProps)(CreatePost);