import React, {useState, useCallback} from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'

function UseCallbackParentFun() {

    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(50000)

    const incementAge = useCallback(() => {    //useCallback caches provided function instance itself
        setAge(age +  1)
    }, [age]) 

    const incementSalary = useCallback(() => {    //useCallback caches provided function instance itself
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title/>
            <Count text='Age' count={age}/>
            <Button handleClick={incementAge}>Increment Age</Button>
            <Count text='Salary' count={salary}/>
            <Button handleClick={incementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UseCallbackParentFun

//performance optimization
//call useCallback which accepts a callback function as its first parameter and array of dependency its 
//second parameter
//when we click on 'Increment Age' button then related 'Increment Age' counter as well as rerender but
//Increment Salary button is also rerender so avoid this unessesory rendering use  useCallback  to 
//optimize performance of component