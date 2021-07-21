import React from 'react'

function EventFun() {

    function clickHandler(){
        console.log('Button clicked');
    }
    
    function mouseLeaveHandler(){
        console.log('Button hovered');
    }

    return (
        <div>
            <h5>Event in Function component</h5>
            <button onClick={clickHandler}>Click Event</button>
            <button onMouseLeave={mouseLeaveHandler}>Mouse Leave Event</button>
        </div>
    )
}

export default EventFun;
 