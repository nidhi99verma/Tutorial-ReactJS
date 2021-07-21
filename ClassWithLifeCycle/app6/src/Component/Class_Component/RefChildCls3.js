import React, { Component } from 'react'

class RefChildCls3 extends Component {

    constructor(props) {
        super(props)
    
        this.inputRefs = React.createRef()
    }
    
    focusInput(){
        this.inputRefs.current.focus()
    }

    render() {
        return (
            <div>
                <h5>Using Refs from child component to class parent component</h5>
                <input type='text' ref={this.inputRefs}/>
            </div>
        )
    }
}

export default RefChildCls3
