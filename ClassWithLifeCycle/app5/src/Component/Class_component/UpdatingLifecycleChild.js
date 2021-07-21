import React, { Component } from 'react'

class UpdatingLifecycleChild extends Component {
    //4(M)
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nidhi'
        }
        console.log('Mounting child component Lifecycle constructor');
    }

    //5(M) | 4(U)
    static getDerivedStateFromProps(props, state){
        console.log('Mounting&Updating child component Lifecycle getDrivedStateFromProps');
        return null;
    }
    //7(M)
    componentDidMount() {
        console.log('Mounting Child component Lifecycle componentDidMount');
    }
    //5(U)
    shouldComponentUpdate() {
        console.log('Updating Child component Lifecycle shouldComponentUpdate');
        return true
    }
    //7(U)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Updating Child component Lifecycle getSnapshotBeforeUpdate');
        return null
    }
    //9(U)
    componentDidUpdate() {
        console.log('Updating Child component Lifecycle componentDidUpdate');
    }
    //6(M) | 6(U)
    render() {
        console.log('Mounting&Updating Child component Lifecycle render');
        return (
            <div>
                <h5>Component Mounting and Updating Lifecycle of Child component</h5>
            </div>
        )
    }
}

export default UpdatingLifecycleChild
