import useCounter from '../../CustomeHooks/useCounter';

function ReusableCustomeHooksFunA() {

    const [count, incrementCount, dcrementCount, reset] = useCounter()

    return (
        <div>
            <h6>Count : {count}</h6>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={dcrementCount}>Decrement Count</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


export default ReusableCustomeHooksFunA
