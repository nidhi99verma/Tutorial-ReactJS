import React from 'react'

function Count({text, count}) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            <h6>{text} : {count}</h6>
        </div>
    )
}

export default React.memo(Count)
