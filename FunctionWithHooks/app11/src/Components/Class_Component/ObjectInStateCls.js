import React, { Component } from 'react'

class ObjectInStateCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName: '',
             lastName: ''
        }
    }
    

    render() {

        const {firstName, lastName} = this.state;

        return (
            <div>
                <input 
                type='text'
                value={firstName}
                onChange={(e) => {this.setState({firstName: e.target.value})}}
            />
            <input 
                type='text'
                value={lastName}
                onChange={(e) => {this.setState({lastName: e.target.value})}}
            />
                <h5>Your first Name is : {firstName}</h5>
                <h5>Your last Name is : {lastName}</h5>
            </div>
        )
    }
}

export default ObjectInStateCls
