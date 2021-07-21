import axios from 'axios'
import React, { Component } from 'react'

class DataFetchingUseEffectCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( res => {
                console.log(res)
                this.setState({posts: res.data})
            }) 
            .catch( error => {
                console.log(error);
            })  
    }

    render() {

        const {posts} = this.state

        return (
            <div>
                <ul>
                {
                    posts.map(post => (<li key={post.id}>{post.title}</li>))
                }
                </ul>
            </div>
        )
    }
}

export default DataFetchingUseEffectCls
