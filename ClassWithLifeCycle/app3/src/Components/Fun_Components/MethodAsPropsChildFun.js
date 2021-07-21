import React from 'react'

function MethodAsPropsChildFun(props) {
    return (
        <div>
           <h5>This is Method as props pass </h5>
            {/* <button onClick={props.greetHandler}>Click</button>  */}
            {/* if u want to pass parameter use arrow function  */}
            <button onClick={() => props.greetHandler('child')}>Click</button> 
        </div>
    )
}

export default MethodAsPropsChildFun
