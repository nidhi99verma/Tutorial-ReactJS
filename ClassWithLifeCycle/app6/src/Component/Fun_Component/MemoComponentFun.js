import React from 'react'

function MemoComponentFun({name}) {
    console.log('*****Rendering Memo copmonent*****');
    return (
        <div>
            <h5>Memo copmponent for function {name}</h5>
        </div>
    )
}

export default React.memo(MemoComponentFun)
