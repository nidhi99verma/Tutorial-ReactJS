import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10
};
const reducer = ( (state, action) => {
    switch (action.type) {
        case 'increase':
           return ({...state, firstCounter: state.firstCounter + action.value});
        case 'decrease':
           return ({...state, firstCounter: state.firstCounter - action.value});
        case 'multiply':
           return ({...state, secondCounter: state.secondCounter * action.value});
        case 'devide':
           return ({...state, secondCounter: state.secondCounter / action.value});
        case 'reset':
            return initialState;
        default:
            return state;
    }
})

function UseReducerObject() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <h6>First Count : {count.firstCounter}</h6>                
                <button onClick={()=>dispatch({type: 'increase' , value: 1})}>Increase</button>
                <button onClick={()=>dispatch({type: 'decrease' , value: 1})}>Decrease</button>
                <button onClick={()=>dispatch({type: 'increase' , value: 5})}>Increase 5</button>
                <button onClick={()=>dispatch({type: 'decrease' , value: 5})}>Decrease 5</button>
                <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
            </div>            
            <div>
                <h6>Second Count : {count.secondCounter}</h6>                
                <button onClick={()=>dispatch({type: 'multiply', value: 2})}>Multiply</button>
                <button onClick={()=>dispatch({type: 'devide',   value: 2})}>Devide</button>
                <button onClick={()=>dispatch({type: 'multiply', value: 5})}>Multiply 5</button>
                <button onClick={()=>dispatch({type: 'devide',   value: 5})}>Devide 5</button>
                <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
            </div>            
        </>
    )
}

export default UseReducerObject

//complex useReducer: in which we can use both state and action as object
//maintaining multiple variable in a single state object is suitable when we dealing with global state 
//not for local state here we use in local state so there is another way to for this