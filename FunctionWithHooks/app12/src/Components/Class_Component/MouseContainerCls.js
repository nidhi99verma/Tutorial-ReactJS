import React, { Component } from 'react'
import CleanupUseEffectCls from './CleanupUseEffectCls'

class MouseContainerCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             display : true
        }
    }
    
    render() {

        const { display } = this.state
        
        return (
            <div>
                <button onClick={() => this.setState({display: !display})}>Toggle Display</button>
                {display && <CleanupUseEffectCls/>}
            </div>
        )
    }
}

export default MouseContainerCls
