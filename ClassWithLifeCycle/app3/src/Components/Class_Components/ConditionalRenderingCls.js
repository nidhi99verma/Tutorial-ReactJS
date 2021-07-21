import React, { Component } from 'react'

class ConditionalRenderingCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }

//*1st using 'if else'

    // render() {
    //     if(this.state.isLoggedIn){

    //         return (
    //             <div>
    //                 <h5>Conditional Rendering using if in class component</h5>
                    
    //                 <h6>Welcome Nidhi</h6>
    //             </div>
    //         )

    //     }else{

    //         return (
    //             <div>
    //                 <h5>Conditional Rendering using if in class component</h5>
                    
    //                 <h6>Welcome Guest</h6>
    //             </div>
    //         )


    //     }
    // }

//*2nd way using 'element variables'

    // render() {
        
    //     let message 

    //     if(this.state.isLoggedIn){

    //         message = <h6>Welcome Nidhi</h6>

    //     }else{

    //         message =  <h6>Welcome Guest</h6>

    //     }
    //     return (
    //         <div>
    //             <h5>Conditional Rendering using if in class component</h5>
    //             {message}
    //         </div>
    //     )    
    // }

//*3rd using 'Ternary Condition operator'    

        // render() {

        //     return this.state.isLoggedIn ?
        //         (<div>
        //             <h5>Conditional Rendering using if in class component</h5>
                    
        //             <h6>Welcome Nidhi</h6>
                    
        //         </div>)
        //         :
        //         (<div>
        //             <h5>Conditional Rendering using if in class component</h5>
                    
        //             <h6>Welcome Guest</h6>
                    
        //         </div>) 

        // }

//*4th way using 'short circuit operator'
//if condition is flase it will not render any thing
        render() {

            return this.state.isLoggedIn &&
                (<div>
                    <h5>Conditional Rendering using if in class component</h5>
                    
                    <h6>Welcome Nidhi</h6>
                    
                </div>)
    }    
}    
export default ConditionalRenderingCls
