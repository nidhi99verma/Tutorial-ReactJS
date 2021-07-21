import React, {useContext} from 'react';
import {CountContext} from './UseReducerUseContext';

function ComponentC2() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h6>ComponentC2 Count : {countContext.countState}</h6>
            <button onClick={() => countContext.countDispatch('increase')}>Increase</button>
            <button onClick={() => countContext.countDispatch('decrease')}>Decrease</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentC2