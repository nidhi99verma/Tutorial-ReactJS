import React, { Component } from 'react'
import RefChildCls3 from './RefChildCls3';

class RefParentCla3 extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
    }
    

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <RefChildCls3 ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default RefParentCla3

//ref use in class component only