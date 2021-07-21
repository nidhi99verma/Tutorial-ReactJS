import React, { Component } from 'react'

class ClickCounterWithRenderPropsCls extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterWithRenderPropsCls;
