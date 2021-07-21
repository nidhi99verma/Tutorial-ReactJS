import React, { Component } from 'react'
import { UserProvider } from './UserContextCls';
import ComponentC from './ComponentC'
import ComponentB from './ComponentB'

export class AllUseContextCls extends Component {
    render() {
        return (
            <div>
                {/* 1st way with component C */}
                <h5> 1st way with component C </h5>
                <UserProvider value='Nidhi'>
                    <ComponentC/>
                </UserProvider>

                <hr/>
                    {/* Show default value will show if component does not have matching provider above it in component tree*/}
                    <h5>component C </h5>
                    <ComponentC/>      
                <hr/>

                {/* 2nd way with component B */}
                <h5>2nd way with component B</h5>
                <UserProvider value='Nidhi'>
                    <ComponentB/>
                </UserProvider>
                <hr/>
            </div>
        )
    }
}

export default AllUseContextCls
