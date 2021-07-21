import React, { Component } from 'react'

class UseEffectCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    componentDidMount () {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate () {
        document.title = `Clicked ${this.state.count} times`
    }
    
    render() {

        const {count} = this.state;

        return (
            <div>
                <button onClick={() => this.setState({count: count + 1})}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UseEffectCls
