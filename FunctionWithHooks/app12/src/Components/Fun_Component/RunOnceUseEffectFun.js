import React, {useState, useEffect} from 'react'

function RunOnceUseEffectFun() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Move mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div>
           X - {x} Y - {y} 
        </div>
    )
}

export default RunOnceUseEffectFun

//want call useEffect only on initial render and forget about it 
//we can mimicked componentDidMount with useEffect hooks by passing simply in useEffect in empty array[] as 2nd 
//parameter to useEffect 

//empty array[] pass in useEffect means that this particular effect does not depend on any props or state so there 
//is no resion for you to call this effect on rerender it means you want call useEffect only on initial render and 
//forget about it 

//useEffect call on initial render and when mouse move around we only have mouse event logs useEffect not call 
//on subsequent renders