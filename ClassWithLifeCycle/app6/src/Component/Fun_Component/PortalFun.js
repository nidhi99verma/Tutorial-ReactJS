import React from 'react'
import ReactDOM from 'react-dom';

function PortalFun() {
    return ReactDOM.createPortal(
        <div>
            <h5>React Portal in Function component</h5>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalFun

//why use portal
//-https://codesandbox.io/s/00254q4n6p
//-https://codepen.io/gaearon/pen/jGBWpE
