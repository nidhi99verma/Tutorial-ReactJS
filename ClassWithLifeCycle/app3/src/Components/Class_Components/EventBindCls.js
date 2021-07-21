import React, { Component } from 'react'

class EventBindCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hi..😁'
        }
        // 3 way
        this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     this.setState({                       //*1
    //             message : "Bye..😩"
    //     })
    //     //console.log(this);          
    // }


    //4 way
    changeMessage = () => {
        this.setState({                      
                message : "Bye..😩"
        })        
    }
    

    render() {
        return (
            <div>
                <h5>Event Binding in Class</h5>
                <h6>{this.state.message}</h6>
                {/* 1 way */}
                <button onClick={() => this.changeMessage()}>Click</button>
                {/* 2 way */}
                {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
            </div>
        )
    }
}

export default EventBindCls;

// *1>changeMessage() why give error, when onClick={this.changeMessage} event fire and console.log(this) gives 'undefine'
//region : 
//This is because when you use an arrow function, the event handler is automatically bound to the component instance
//so you don't need to bind it in the constructor. When you use an arrow function you are binding this lexically

//but our code we are not use arrow function onClick={this.changeMessage} so 
//in constructor state' context puff out after execution and wheb we call changeMessage() so this cann't find 
//state in constructor ....when ever use two thing(function , variable, object) which is dependent on each other then 
//we have to bind with constructor because of context, when first context puff out then other will not work
//in this case we have requirement of binding constructor with dependent data(function , variable, object)

//too many way to bind event with constructor:

//1> onClick={() => this.changeMessage()}                 //use arrow fun when event fire
//2> onClick={this.changeMessage.bind(this)}              //use bind 
//3> this.changeMessage = this.changeMessage.bind(this)  //inside constructor
//4> changeMessage = () => {...}                         //use fun which is called is arrow fun 

//in 2 and 3 case we can see that event bind with constructor so context stay for that event
//in 1 and 4 in use arrow fun so how this will bind event to constructor..answer is in this arrow function
//return this.changeMessage() so we use ()... and we know that in js when any function return any thing then
//dependent context will not puff out it will wait and stay.

//3 and 4 are approch suggested to use