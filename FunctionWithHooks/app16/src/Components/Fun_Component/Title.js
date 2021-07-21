import React from 'react'

function Title() {
    console.log('Rendering Title');
    return (
        <div>
            <h6>UseCallback hooks</h6>
        </div>
    )
}

export default React.memo(Title)

//it is useful when passing calllbacks to optimized child componets that rely on reference equality to 
//prevent unnecessary renders(using REact.memo())