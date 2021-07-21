import React, { Component } from 'react'

class WithoutRenderPropsClickCounterCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount = () => {
        this.setState( prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default WithoutRenderPropsClickCounterCls
