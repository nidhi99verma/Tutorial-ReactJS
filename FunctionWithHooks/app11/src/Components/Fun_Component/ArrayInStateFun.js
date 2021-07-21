import React, {useState} from 'react'

function ArrayInStateFun() {

    const [items, setItems] = useState([])

    const addItemHandler = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItemHandler}>Add Item</button>
            <ul>
                {
                    items.map(item => (<li key={item.id}>{item.value}</li>))
                }
            </ul>
        </div>
    )
}

export default ArrayInStateFun
