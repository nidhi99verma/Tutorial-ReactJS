import React, { Children } from 'react'

//two way to destructure props:

//1st way

// function DestructurPropsFun({name, age, children}) { 

//     return (
//         <div>
//            <h5>Destructuring Props in Function</h5>
//            <h6>Hey, I am {name}.</h6>
//            {children}
//            <h6>I am {age} year old.</h6> 
//         </div>
//     )
// }

//2nd way

function DestructurPropsFun(props) { 

    const {name, age, children} = props;

    return (
        <div>
           <h5>Destructuring Props in Function</h5>
           <h6>Hey, I am {name}.</h6>
           {children}
           <h6>I am {age} year old.</h6> 
        </div>
    )
}

export default DestructurPropsFun

//-it make possible to unpack values from arrays or properties from object into distinct variables 
//-in react Destructuring props and state improve code readability  