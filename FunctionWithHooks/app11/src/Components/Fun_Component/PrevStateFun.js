import React, {useState} from 'react'

function PrevStateFun() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(precousCount => precousCount + 1)
            //it will not take previous value so u get wrong output
            // setCount(count + 1)
        }
    }

    return (
        <div>
            <h5>{count}</h5>
            {/* This is possible with this way but it is not right way to do this*/}
            {/* <button onClick={() => setCount(count + 1)}>Count + </button>
            <button onClick={() => setCount(count - 1)}>Count - </button> */}

            {/* right way */}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(precousCount => precousCount + 1)}>Count + </button>
            <button onClick={() => setCount(precousCount => precousCount - 1)}>Count - </button>
            {/*in this condition above approach will not give right answer in this case */}
            <button onClick={incrementFive}>Count +5 </button>
        </div>
    )
}

export default PrevStateFun
