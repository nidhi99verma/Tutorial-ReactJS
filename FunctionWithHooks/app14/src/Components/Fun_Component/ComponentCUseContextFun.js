import React, { useContext } from 'react'
import {UserContext, ChannelContext} from './UseContextFun'

function ComponentCUseContextFun() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <div>UserContext {user}, Nested UserContext {channel}, in simple way</div>
        </div>
    )
}

export default ComponentCUseContextFun
