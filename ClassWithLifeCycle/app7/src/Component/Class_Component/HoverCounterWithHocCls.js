import React, { Component } from 'react'
import UpdateComponent from './HocCounterComponent';

class HoverCounterWithHocCls extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h5 onMouseOver={incrementCount}>Hovered {count} times</h5>
            </div>
        )
    }
}


export default UpdateComponent(HoverCounterWithHocCls, 2);
