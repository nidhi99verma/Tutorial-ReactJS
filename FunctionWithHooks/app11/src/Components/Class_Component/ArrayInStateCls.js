import React, { Component } from 'react'

class ArrayInStateCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items: []               //{id: null, value: null}
        }
    }
    
    addItemHandler = () => {
        this.setState({
            items : [...this.state.items, {id: this.state.items.length, value: Math.floor(Math.random() * 10) + 1}]
        })
    }

    render() {

        const {items} = this.state;

        return (
            <div>
            <button onClick={this.addItemHandler}>Add Item</button>
                <ul>
                    {
                        items.length ?
                        items.map(item => (<li key={item.id}>{item.value}</li>)) :
                        null
                    }
                </ul>
            </div>
        )
    }
}

export default ArrayInStateCls
