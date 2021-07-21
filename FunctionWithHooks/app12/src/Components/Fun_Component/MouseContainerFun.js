import React, { useState } from 'react'
import CleanupUseEffectFun from './CleanupUseEffectFun'

function MouseContainerFun() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <CleanupUseEffectFun/>}
        </div>
    )
}

export default MouseContainerFun
