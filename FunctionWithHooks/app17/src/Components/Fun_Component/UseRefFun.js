import React, {useEffect, useRef} from 'react';

function UseRefFun() {

    const inputRef = useRef(null)

    useEffect(() => {
        //focus the input elelment
        inputRef.current.focus()
    }, []) 

    return (
        <div>
            <input ref={inputRef} type='text'/>
        </div>
    )
}

export default UseRefFun
