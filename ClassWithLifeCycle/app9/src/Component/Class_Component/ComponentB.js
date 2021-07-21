import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {

    static contextType = UserContext                               //or

    render() {
        return (
            <div>
                {/* not need in 1st way */}
                Component B context {this.context}             
                <ComponentC />
            </div>
        ) 
    }
}

//or
// ComponentB.contextType = UserContext

export default ComponentB
