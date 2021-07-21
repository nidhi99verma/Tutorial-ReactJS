import React from 'react'

function CssModuleFun() {
    return (
        <div>
            <h5>Using css modules in function component</h5>
            <h6 className='error'>Error</h6>
            {/* <h6 className={style.success}>Success</h6> */}
        </div>
    )
}

export default CssModuleFun


//css module can't be uded in child component : advantge
//classes are locally scope by default 



