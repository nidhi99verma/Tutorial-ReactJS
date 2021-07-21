import React, {useState, useEffect} from 'react';
import axios from 'axios';

function UseStateUseEffectFetchApi() {

    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setpost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setloading(false)
            seterror('')
            setpost(response.data)
        })
        .catch(error => {
            setloading(false)
            seterror('Somthing went wrong!')
            setpost({})
        })
    }, [])

    return (
        <div>
            {
                loading ? 'Loading' : post.title
            }
            {
                error ? error : null
            }
        </div>
    )
}

export default UseStateUseEffectFetchApi
