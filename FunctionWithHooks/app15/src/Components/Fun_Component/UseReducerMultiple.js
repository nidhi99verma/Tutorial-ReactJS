import React, { useReducer } from 'react'

const initialState = 0;
const reducer = ( (state, action) => {
    switch (action) {
        case 'increase':
           return state + 1;
        case 'decrease':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
})

function UseReducerMultiple() {
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <h6>Count1 : {count1}</h6>
                <button onClick={()=>dispatch1('increase')}>Increase</button>
                <button onClick={()=>dispatch1('decrease')}>Decrease</button>
                <button onClick={()=>dispatch1('reset')}>Reset</button>
            </div>
            <div>
                <h6>Count2 : {count2}</h6>
                <button onClick={()=>dispatch2('increase')}>Increase</button>
                <button onClick={()=>dispatch2('decrease')}>Decrease</button>
                <button onClick={()=>dispatch2('reset')}>Reset</button>
            </div>
        </>
    )
}

export default UseReducerMultiple

//when dealing with multiple state variable that have same state transition it is good idea to have multiple
//useReducer making use of the same reducer function this will avoid complexcity of merging state if it were
//to be an object and also prevents us from duplicating code in reducer function