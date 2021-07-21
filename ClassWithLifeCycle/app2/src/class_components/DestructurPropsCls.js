import React, { Component } from 'react'

class DestructurPropsCls extends Component {
    
    render() {

        const {name, age, children} = this.props;

        return (
            <div>
                <h5>Destructuring Props in Class</h5>
                <h6>Hey, I am {name}.</h6>
                {children} 
                <h6>I am {age} year old.</h6> 
            </div>
        )
    }
}

export default DestructurPropsCls
