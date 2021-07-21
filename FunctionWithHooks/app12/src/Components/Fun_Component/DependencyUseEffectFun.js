import React, {useState, useEffect} from 'react'

function DependencyUseEffectFun() {

    const [count, setCount] = useState(0)

    // const clock = () => {
    //     setCount(count + 1)
    // }

    // useEffect(() => {
        
    //     const interval = setInterval(clock, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }

    // }, [count])

    // OR

    const clock = () => {
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {

        // function doSomthing(){
        //     console.log(someProp);
        // }
        
        const interval = setInterval(clock, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])
    // }, [someProp])

    return (
        <div>
             <h6>{count}</h6>
        </div>
    )
}

export default DependencyUseEffectFun

//here useEffect rendering depends on count(state) so do not forget to pass count in array
//but if u are using prevoCount then no need to pass this state in array 
//any props or state value require for render then always pass in array