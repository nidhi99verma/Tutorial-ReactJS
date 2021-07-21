import React, {useState, useEffect} from 'react'

function CleanupUseEffectFun() {

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

        return () => {
            console.log('component unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])

    return (
        <div>
           X - {x} Y - {y} 
        </div>
    )
}

export default CleanupUseEffectFun

//even though component has been removed the eventlistener which belongs to that component is still listening
//and executing 
//when component unmount make sure you cancel all you subscription and listeners in other words clean up after 
//your component
//that is function pass to useEffect can return a function which will executed when the component will unmount so
//what ever u return is basically your cleanup function
//cleanup code can be canceling subscription timers or even removing event handler  
