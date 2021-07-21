import useCounter from '../../CustomeHooks/useCounter';

function ReusableCustomeHooksFunB() {

    const [count, incrementCount, dcrementCount, reset] = useCounter(10, 5)

    return (
        <div>
            <h6>Count : {count}</h6>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={dcrementCount}>Decrement Count</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


export default ReusableCustomeHooksFunB
