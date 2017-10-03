import React from 'react'
import Whatshot from 'material-ui/svg-icons/social/whatshot'
import { ICON_STYLE } from '../config'

const VoteScore = ({ score }) => (
    <div>
        <Whatshot style={{
            ...ICON_STYLE,
            color: score > 0 ? 'red' : (score < 0 ? 'blue' : 'rgba(0,0,0,0.5)')
        }} />
        {score}
    </div>
)

export default VoteScore