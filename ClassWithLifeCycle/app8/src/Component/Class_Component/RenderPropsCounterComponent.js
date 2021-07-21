import React, { Component } from 'react'

class RenderPropsCounterComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount = () => {
        this.setState( prevState => {
            return { count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.show(this.state.count, this.incrementCount)}
                {/* or */}
                {/* {this.props.children(this.state.count, this.incrementCount)} */}
            </div>                                    
        )
    }
}

export default RenderPropsCounterComponent;
