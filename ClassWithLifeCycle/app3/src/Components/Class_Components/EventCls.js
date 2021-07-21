import React, { Component } from 'react'

class EventCls extends Component {

    clickHandler(){
        console.log('Button clicked');
    }

    mouseLeaveHandler(){
        console.log('Button hovered');
    }

    render() {
        return (
            <div>
                <h5>Event in Class component</h5>
                <button onClick={this.clickHandler}>Click</button>
                <button onMouseLeave={this.mouseLeaveHandler}>Mouse Leave Event</button>
            </div>
        )
    }
}

export default EventCls
