import React, {useState, useEffect} from 'react'

function ConditionallyEffectsFun() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( () => {
        console.log('Updating document title');
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value) }/>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>  
    )
}

export default ConditionallyEffectsFun

//In order to conditionally run an effect specify the 2nd parameter to useEffect() the 2nd parameter is the array
//of values the effect depends on if value don't change between render the effect is simply not run so a 
//good optimization technique 

//above useEffect() will rerending dependes on [count] if count value will update then it will rerende either not

//rerending dependes on useEffect() in 2nd argument [] in pass value if it will update then rerender

