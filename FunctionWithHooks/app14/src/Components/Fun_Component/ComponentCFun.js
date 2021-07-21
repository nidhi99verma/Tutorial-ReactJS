import React from 'react'
import {UserContext, ChannelContext} from './UseContextFun'

function ComponentCFun() {
    return (
        // <div>
        //     <UserContext.Consumer>
        //         {
        //             user => {
        //                 return(<div>UserContext {user}</div>)
        //             }
        //         }
        //     </UserContext.Consumer>
        // </div>

        //nested useContext

        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return(<div>UserContext {user}, Nested UserContext {channel}</div>)
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentCFun
