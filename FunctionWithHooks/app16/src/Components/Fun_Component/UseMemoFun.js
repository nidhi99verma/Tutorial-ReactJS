 import React, {useState, useMemo} from 'react'
 
 function UseMemoFun() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const increaseOne = () => {
        setCounterOne(counterOne + 1)
    }

    const increaseTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    //with memo

    const isEven = useMemo(() => {
            let i = 0                           //             
            while(i < 200000000)                //this part make slow to show Count even or odd 
            i++                                 // 
            return counterOne % 2 === 0
    }, [counterOne])  //caches its result(counterOne)

     return (
         <div>
             <button onClick={increaseOne}>Count One - {counterOne}</button>
             {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
             <span>{isEven ? 'Even' : 'Odd'}</span>
             <br/>
             <button onClick={increaseTwo}>Count Two - {counterTwo}</button>
         </div>
     )
 }
 
 export default UseMemoFun
 //use for performance optimization
 //isEven function in we use 'while' condition to make click slow to show even odd but it is also run when
 //increaseTwo method call so we need useMemo for this problem

 //what is diff between useMemo and useCallback
 //useCallback caches provided function instance itself where useMemo invokes the provided function and
 //caches its result so if you need to cache a function use useCallback and when u need to cache result of
 //invoke function use useMemo