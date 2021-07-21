import React, { Component } from 'react'
import ForwardRefChildCls from '../Fun_Component/ForwardRefChildCls';

class ForwardRefParentClas extends Component {

    constructor(props) {
        super(props)
    
        this.inputRefs = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRefs.current.focus()
    }

    render() {
        return (
            <div>
                <ForwardRefChildCls ref={this.inputRefs}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardRefParentClas
