import React, { Component } from 'react'

class WithoutHocHoverCounterCls extends Component {
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
                <h5 onMouseOver={this.incrementCount}>Hovered {count} times</h5>
            </div>
        )
    }
}


export default WithoutHocHoverCounterCls
