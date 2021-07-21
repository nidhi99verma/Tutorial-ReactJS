import React, { Component, useReducer } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = React.createContext()

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

function UseReducerUseContext() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <div>
                <h6>Count : {count}</h6>
                <ComponentA/>
                <ComponentB/>
                <ComponentC/>
            </div>
        </CountContext.Provider>
    )
}

export default UseReducerUseContext

//A
//B>B1
//C>C1>C2
//combining useReducer with useContext for global state managment
//count value share across the components from component A, B1, C2 we should be able to manage this 
//global count value