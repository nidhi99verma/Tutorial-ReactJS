import React from 'react'
import './CssStyleSheetFun.css';

function CssStyleSheetFun(props) {

    let className = props.primCon ?  'primary' : ''

    return (
        <div>
            {/* <h5 className='primary'>CSS Stylesheets</h5> */}
            {/* or conditionally style */}
            <h5 className={`${className} font-xl`}>CSS Stylesheets</h5>
        </div>
    )
}

export default CssStyleSheetFun
