import React, { Component } from 'react'

class HoverCounterWithRenderPropsCls extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h5 onMouseOver={incrementCount}>Hovered {count} times</h5>
            </div>
        )
    }
}


export default HoverCounterWithRenderPropsCls;
