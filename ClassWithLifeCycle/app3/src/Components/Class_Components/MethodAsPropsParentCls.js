import React, { Component } from 'react'
import MethodAsPropsChildFun from '../Fun_Components/MethodAsPropsChildFun';

class MethodAsPropsParentCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);

    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    

    render() {
        return (
            <div>
                <MethodAsPropsChildFun greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default MethodAsPropsParentCls
