import React, { Component } from 'react'

class PropsCls extends Component {
    
    render() {
        return (
            <div>
                <h5>Props in Class</h5>
                <h6>Hey, I am {this.props.name}.</h6>
                {this.props.children} 
                <h6>I am {this.props.age} year old.</h6> 
            </div>
        )
    }
}

export default PropsCls
