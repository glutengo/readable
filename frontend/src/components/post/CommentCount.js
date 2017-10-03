import React from 'react'
import Comment from 'material-ui/svg-icons/communication/comment'
import { ICON_STYLE } from '../../config'

const CommentCount = ({ count }) => (
    <div>
        <Comment style={ICON_STYLE} />
        {count}
    </div>
)

export default CommentCount