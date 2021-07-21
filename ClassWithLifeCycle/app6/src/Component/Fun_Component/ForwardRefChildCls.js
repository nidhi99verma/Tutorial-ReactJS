import React from 'react'

const ForwardRefChildCls = React.forwardRef((props, ref)=> {               //ref get this.inputRefs
    return (
        <div>
            <h5>Forwording ref from function child component to class parent component</h5>
            <input type='text' ref={ref}/>
        </div>
    )
}) 

export default ForwardRefChildCls
