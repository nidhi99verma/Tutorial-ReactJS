import React, { Component } from 'react'
import UpdateComponent from './HocCounterComponent';

class ClickCounterWithHocCls extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounterWithHocCls, 5);
