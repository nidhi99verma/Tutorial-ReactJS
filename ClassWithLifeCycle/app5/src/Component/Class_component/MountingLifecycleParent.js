import React, { Component } from 'react'
import MountingLifecycleChild from './MountingLifecycleChild';

class MountingLifecycleParent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nidhi'
        }
        console.log('Mounting Parent component Lifecycle constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Mounting Parent component Lifecycle getDrivedStateFromProps');
        return null;
    }
    
    componentDidMount() {
        console.log('Mounting Parent component Lifecycle componentDidMount');
    }

    render() {
        console.log('Mounting Parent component Lifecycle render');
        return (
            <div>
                <h5>Component Mounting Lifecycle of Parent component</h5>
                <MountingLifecycleChild/>
            </div>
        )
    }
}

export default MountingLifecycleParent

//after chid component re-render then parent componentDidMount() is executed. 
