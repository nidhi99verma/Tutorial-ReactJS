import React, { Component } from 'react'

class ClearTimeIntervalCls extends Component {
    
    interval

    constructor(props) {
        super(props)
    
        this.state = {
             timer: 0
        }
    }
    
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState(preState => ({timer: preState.timer + 1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Time : {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear Time</button>
            </div>
        )
    }
}

export default ClearTimeIntervalCls
