import React from 'react'

function JsxCom() {
    //with JSX

    // return (
    //     <div className='dummyClass'>
    //         <h1>This is component with JSX</h1>
    //     </div>
    // )

    //without JSX

    return React.createElement('div', {id: 'item1', className: 'dummyClass'}, 
        React.createElement('h1', null, 'This is component without JSX'))
}

export default JsxCom
