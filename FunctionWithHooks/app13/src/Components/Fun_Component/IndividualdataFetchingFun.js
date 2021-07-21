import React, {useEffect, useState} from 'react'
import axios from 'axios'

function IndividualdataFetchingFun() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then( res => {
                console.log(res)
                setPost(res.data)
            }) 
            .catch( error => {
                console.log(error);
            })  
    }, [id])

    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)}/>
            <h6>{post.title}</h6>
            <h6>Complete JSON data : {JSON.stringify(post)}</h6>
            <h6>userId : {JSON.stringify(post.userId)}</h6>
            <h6>id : {JSON.stringify(post.id)}</h6>
            <h6>title : {JSON.stringify(post.title)}</h6>
            <h6>body : {JSON.stringify(post.body)}</h6>
        </div>
    )
}

export default IndividualdataFetchingFun
