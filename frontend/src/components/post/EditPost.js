import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class EditPost extends Component {

    valueChanged(key, value) {
        this.props.onChange({
            ...this.props.post,
            [key]: value
        });
    }

    render() {

        return (
            <div>
                <TextField
                    fullWidth={true}
                    floatingLabelText="title"
                    value={this.props.post.title}
                    onChange={e => this.valueChanged('title', e.target.value)} />
                <TextField
                    fullWidth={true}
                    floatingLabelText="body"
                    value={this.props.post.body}
                    multiLine={true}
                    rows={2}
                    onChange={e => this.valueChanged('body', e.target.value)} />
                <TextField
                    fullWidth={true}
                    floatingLabelText="author"
                    value={this.props.post.author}
                    onChange={e => this.valueChanged('author', e.target.value)} />
                <SelectField
                    fullWidth={true}
                    floatingLabelText="category"
                    value={this.props.post.category}
                    onChange={(e, value) => this.valueChanged('category', this.props.categories[value].name)}
                >
                    {this.props.categories.map(category => (
                        <MenuItem key={category.name} value={category.name} primaryText={category.name} />
                    ))}
                </SelectField>
            </div>
        )
    }
}

const mapStateToProps = ({categories}, oldProps) => {
    return {
        ...oldProps,
        categories: categories
    }
}

export default connect(mapStateToProps)(EditPost)