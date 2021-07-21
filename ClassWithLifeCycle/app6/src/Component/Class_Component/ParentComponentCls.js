import React, { Component, PureComponent } from 'react'
import RegularComponentCls from './RegularComponentCls';
import PureComponentCls from './PureComponentCls';
import MemoComponentFun from '../Fun_Component/MemoComponentFun';

class ParentComponentCls extends Component {
//class ParentComponentCls extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nidhi'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Nidhi'
            })
        }, 2000)
    }

    render() {
        console.log('*****Parent Component Render*****');
        return (
            <div>
                {/* <h5>Parent Component</h5>
                <RegularComponentCls name= {this.state.name}/>
                <PureComponentCls name= {this.state.name}/> */}

                {/* memo component */}
                <MemoComponentFun name= {this.state.name}/>
            </div>
        )
    }
}

export default ParentComponentCls

//pure component work only in class component 
//memo component work only in function component
//but both works same