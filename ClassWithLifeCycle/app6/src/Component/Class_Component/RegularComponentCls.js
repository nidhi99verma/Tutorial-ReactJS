import React, { Component } from 'react'

class RegularComponentCls extends Component {
    render() {
        console.log('*****Regular Component Render*****');
        return (
            <div>
                <h5>Regular Component {this.props.name}</h5>
            </div>
        )
    }
}

export default RegularComponentCls
