import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs'

class CategoryNavigation extends Component {

    render() {
        return (
            <Tabs value={this.props.category}>
                <Tab label="all" onActive={() => this.props.history.push('/')} value="all"/>
                {this.props.categories.map(category => (
                <Tab label={category.name} value={category.name} onActive={() => {this.props.history.push(`/${category.name}`)}} key={category.name}/>
                ))}
            </Tabs>
        )
    }

}

const mapStateToProps = ({ categories, posts }, oldProps) => {
    return {
        ...oldProps,
        categories: categories
    }
}

export default withRouter(connect(mapStateToProps)(CategoryNavigation))