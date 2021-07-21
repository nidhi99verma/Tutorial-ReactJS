import React, {useContext} from 'react';
import {CountContext} from './UseReducerUseContext';

function ComponentA() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h6>ComponentA Count : {countContext.countState}</h6>
            <button onClick={() => countContext.countDispatch('increase')}>Increase</button>
            <button onClick={() => countContext.countDispatch('decrease')}>Decrease</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA