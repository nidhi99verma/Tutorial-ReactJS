import React, { Component } from 'react'

class DependencyUseEffectCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.clock, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    clock = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {

        const { count } = this.state

        return (
            <div>
                <h6>{count}</h6>
            </div>
        )
    }
}

export default DependencyUseEffectCls
