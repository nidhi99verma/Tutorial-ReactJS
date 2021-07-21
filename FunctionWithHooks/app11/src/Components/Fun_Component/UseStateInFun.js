import React, {useState} from 'react'

function UseStateInFun() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default UseStateInFun

// need to be import {useState}
// useState is just function to call them, it accept an argument which is initial value of the state property
// And returns cureent value of the state property and method (setCounnt) that is capable of updating that state prpoerty
// For update state value we need to pass arrow function in method which is capable of updating that state prpoerty