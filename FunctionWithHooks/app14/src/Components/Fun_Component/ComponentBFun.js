import React from 'react'
import ComponentCFun from './ComponentCFun'
import ComponentCUseContextFun from './ComponentCUseContextFun'

function ComponentBFun() {
    return (
        <div>
            {/* <ComponentCFun/> */}
            {/*simple way of using useContext  */}
            <ComponentCUseContextFun/>
        </div>
    )
}

export default ComponentBFun
