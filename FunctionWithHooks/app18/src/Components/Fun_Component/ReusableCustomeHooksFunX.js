import React, {useState} from 'react';
import useInput from '../../CustomeHooks/useInput';

function ReusableCustomeHooksFunX() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, reseLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        reseLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <lable>First Name</lable>
                    <input 
                       {...bindFirstName}
                        type='text'
                    />
                    <br/>
                    <lable>Last Name</lable>
                    <input 
                        {...bindLastName}
                        type='text'
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ReusableCustomeHooksFunX
