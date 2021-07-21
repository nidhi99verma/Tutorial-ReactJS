import React, { Component } from 'react'
import UpdatingLifecycleChild from './UpdatingLifecycleChild';


class UpdatingLifecycleParent extends Component {
    //1(M)
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nidhi'
        }
        console.log('Mounting Parent component Lifecycle constructor');
    }

    //2(M) | 1(U)
    static getDerivedStateFromProps(props, state){
        console.log('Mounting&Updating Parent component Lifecycle getDrivedStateFromProps');
        return null;
    }
    //8(M)
    componentDidMount() {
        console.log('Mounting Parent component Lifecycle componentDidMount');
    }
    //2(U)
    shouldComponentUpdate() {
        console.log('Updating Parent component Lifecycle shouldComponentUpdate');
        return true
    }
    //8(U)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Updating Parent component Lifecycle getSnapshotBeforeUpdate');
        return null
    }
    //10(U)
    componentDidUpdate() {
        console.log('Updating Parent component Lifecycle componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Ram'
        })
    }
    //3(M) | 3(U)
    render() {
        console.log('Mounting&Updating Parent component Lifecycle render');
        return (
            <div>
                <h5>Component Mounting and Updating Lifecycle of Parent component</h5>
                <button onClick={this.changeState}>Change State Mounting to Updating</button>
                <UpdatingLifecycleChild/>
            </div>
        )
    }
}

export default UpdatingLifecycleParent
