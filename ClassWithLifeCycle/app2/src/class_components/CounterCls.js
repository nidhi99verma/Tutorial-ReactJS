import React, { Component } from 'react'

class CounterCls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0                        //hold cureent and inital value
        }
    }

    // increment() {
    //     this.setState({
    //         count: this.state.count + 1     //hold value that will update
    //     },
    //         () => console.log(this.state.count, "Updateted value")   //* 1
    //     )
    //     //sync
    //     console.log(this.state.count, "value in State");         //2
    //     //in console counter set 1 but log value 0 why
    //     //because calls to setState are asynchronous so 
    //     //console.log is call berfore this.setState in actually value set         
    // }

//react may group multiple setState calls into a single update for better performance 
//in this scenario : all 5 setState  calls are done in one single go and updated value does not carry over 
//between different calls

//so in this scenario: we have to update state value based on previous state for this
//we need to pass 'function as an argument' to setstate() insted of passing in an object

//we are not using current state always using previous state

//previousState: hold previous all value of state

increment() { 
    this.setState((previousState, props) => ({  
        count: previousState.count + 1   
        //count: previousState.count + props.addValue //if new state depends on props object 
        }))
        console.log(this.state.count, "value in State");      
}

    

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h5>Counter In Class</h5>
                <h6>Counter : {this.state.count}</h6>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default CounterCls

//* 1_scenario>> where u want updated value but u can see that 2console value is not updated because setState work 
//asynchronous so if we need current updated value then we have to pass callback function in setState() in 
//as a second argument

//value in State log in : always show previous value 
//Updateted value log in : can see update value because of callback pass in setState( )

//whenev u need to execute some code after state has been changed do not place that code right after setState method
//insted place code within the callback function that is passed as a second parameter to setState() 


// important points

//-always make use of setState and never modify the state directly
//-code has to be executed after the state has been updated? place that code in the callback function which is the second argument to the setState method
//-When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object 
