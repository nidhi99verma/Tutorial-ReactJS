import React, { Component } from 'react'

class AcceptRenderPropsCls extends Component {
    render() {
        return (
            <div>
                {this.props.name(true)}
            </div>
        )
    }
}

export default AcceptRenderPropsCls
