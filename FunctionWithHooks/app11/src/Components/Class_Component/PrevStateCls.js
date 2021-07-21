import React, { Component } from 'react'

class PrevStateCls extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { 
                count: prevState.count + 1 
            }
        })
    }

    decrementCount = () => {
        this.setState(prevState => {
            return { 
                count: prevState.count - 1 
            }
        })
    }
    
    resetCount = () => {
        this.setState({count: 0})
    }

    incrementFive = () => {
        this.setState(prevState => {
            return { 
                count: prevState.count + 5
            }
        })
    }

    render() {
        return (
            <div>
                <h5>{this.state.count}</h5>
                <button onClick={this.resetCount}>Reset</button>
                <button onClick={this.incrementCount}>Count +</button>
                <button onClick={this.decrementCount}>Count -</button>
                <button onClick={this.incrementFive}>Count +5</button>
            </div>
        )
    }
}


export default PrevStateCls
