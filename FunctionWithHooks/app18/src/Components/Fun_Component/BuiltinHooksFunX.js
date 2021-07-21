import React, {useState} from 'react'

function BuiltinHooksFunX() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <lable>First Name</lable>
                    <input 
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        type='text'
                    />
                    <br/>
                    <lable>Last Name</lable>
                    <input 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        type='text'
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BuiltinHooksFunX
