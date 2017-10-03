import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class EditComment extends Component {

    valueChanged(key, value) {
        this.props.onChange({
            ...this.props.comment,
            [key]: value
        })
    }

    render() {
        return (
            <div className="edit-comment">
                <TextField
                    fullWidth={true}
                    floatingLabelText="body"
                    value={this.props.comment.body}
                    multiLine={true}
                    rows={4}
                    onChange={e => this.valueChanged('body', e.target.value)} />
                <TextField
                    fullWidth={true}
                    floatingLabelText="author"
                    value={this.props.comment.author}
                    onChange={e => this.valueChanged('author', e.target.value)} />
            </div>
        )
    }
}

export default EditComment