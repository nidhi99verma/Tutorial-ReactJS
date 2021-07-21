import React, { Component } from 'react'
import ComponentCFun from './ComponentCFun'
import ComponentCUseContextFun from './ComponentCUseContextFun'

// export const UserContext = React.createContext()

// function UseContextFun() {
//     return (
//         <div>
//             <UserContext.Provider value={'Nidhi'}>
//                 <ComponentCFun/>
//             </UserContext.Provider>
//         </div>
//     )
// }

//nested useContext

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function UseContextFun() {
    return (
        <div>
            <h5>using useContext</h5>
            <UserContext.Provider value={'Nidhi'}>
                <ChannelContext.Provider value={'Khana'}>
                    <ComponentCFun/>
                </ChannelContext.Provider>
            </UserContext.Provider>

            <hr/>

            <h5>simple way of using useContext</h5>
            <UserContext.Provider value={'Nidhi'}>
                <ChannelContext.Provider value={'Khana'}>
                    <ComponentCUseContextFun/>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextFun
