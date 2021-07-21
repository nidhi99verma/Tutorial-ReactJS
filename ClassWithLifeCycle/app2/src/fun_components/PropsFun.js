import React from 'react'

function PropsFun(props) {
    console.log(props);
    //props.name = 'verma'; //props are immutable
    return (
        <div>
           <h5>Props in Function</h5>
           <h6>Hey, I am {props.name}.</h6>
           {props.children} 
           <h6>I am {props.age} year old.</h6> 
        </div>
    )
}

export default PropsFun
