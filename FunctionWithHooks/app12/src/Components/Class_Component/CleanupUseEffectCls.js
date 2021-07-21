import React, { Component } from 'react'

class CleanupUseEffectCls extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }
    }
    
    logMousePosition = (e) => {
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount() {
        console.log('componentDidMount called')
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                X - {this.state.x}  Y - {this.state.y}
            </div>
        )
    }
}

export default CleanupUseEffectCls

//componentWillUnmount() will clean up component so event will not execute after unmount of component