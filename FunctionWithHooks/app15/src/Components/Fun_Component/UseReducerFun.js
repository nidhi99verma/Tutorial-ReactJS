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

function UseReducerFun() { 

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h6>Count : {count}</h6>
            <button onClick={()=>dispatch('increase')}>Increase</button>
            <button onClick={()=>dispatch('decrease')}>Decrease</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerFun
