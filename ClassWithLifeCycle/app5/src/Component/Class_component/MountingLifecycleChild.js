import React, { Component } from 'react'

class MountingLifecycleChild extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nidhi'
        }
        console.log('Mounting Child component Lifecycle constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Mounting Child component Lifecycle getDrivedStateFromProps');
        return null;
    }
    
    componentDidMount() {
        console.log('Mounting Child component Lifecycle componentDidMount');
    }

    render() {
        console.log('Mounting Child component Lifecycle render');
        return (
            <div>
                <h5>Component Mounting Lifecycle of Child component</h5>
            </div>
        )
    }
}

export default MountingLifecycleChild
