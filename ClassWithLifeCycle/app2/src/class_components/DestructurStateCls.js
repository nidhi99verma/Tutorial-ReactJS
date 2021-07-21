import React, { Component } from 'react'

class DestructurStateCls extends Component {
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

        const {message} = this.state;

        return (
            <div>
                <h5>Destructuring State in class component</h5>
                <h6>{message}</h6>
                <button onClick={() => {this.changeMessage()}}>Click Me</button>
            </div>
        )
    }
}

export default DestructurStateCls
