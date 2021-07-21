import React, { Component } from 'react'

class StateCls extends Component {
    constructor(){
        super()
        this.state = {
            message : "Welcome visitor"
        }
    }

    changeMessage(){
        this.setState({
                message : "Thanks visitor"
        })
    }

    render() {
        return (
            <div>
                <h5>State in  class component</h5>
                <h6>{this.state.message}</h6>
                <button onClick={() => {this.changeMessage()}}>Click Me</button>
            </div>
        )
    }
}

export default StateCls
