import React, {useState} from 'react'

function ObjectInStateFun() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <input 
                type='text'
                value={name.firstName}
                //onChange={(e) => {setName({firstName: e.target.value})}}
                onChange={(e) => {setName({...name, firstName: e.target.value})}}
            />
            <input 
                type='text'
                value={name.lastName}
                //onChange={(e) => {setName({lastName: e.target.value})}}
                onChange={(e) => {setName({...name, lastName: e.target.value})}}
            />
            <h5>Your first Name is : {name.firstName}</h5>
            <h5>Your last Name is : {name.lastName}</h5>
            <h6>{JSON.stringify(name)}</h6>
        </div>
    )
}

export default ObjectInStateFun

//without spead operator it will take only one value from object
//the setter function provided by hooks does not automatically merge and update objects you have to manually merge it yourself and then pass the value to setter function
