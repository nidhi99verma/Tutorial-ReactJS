import React, { Component } from 'react'
import axios from 'axios'

class HttpGetCls extends Component {
//1 : Control flow
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }
//3 : Control flow    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch((error) => {
            console.log(error)
            this.setState({errorMsg: 'Error retreving data'})
        })
    }
//2 : Control flow
    render() {

        const { posts, errorMsg } = this.state

        return (
            <div>
                <h5>GET Request to API</h5>
                    {
                        posts.length ?
                        posts.map(post => <div key={post.id}><h6>{post.userId}</h6><h6>{post.title}</h6><hr/></div>) :
                        null
                    }
                    {
                        errorMsg ? <div>{errorMsg}</div> : null
                    }
            </div>
        )
    }
}

export default HttpGetCls

//where do we place code to make get request :  In componentDidMount lifecycle methood
//this method will be executed when the component mount for first time and this only executed once during 
//components lifetime a perfect place for get request

//Axios is promise based library so need to add then and catch block

//Control flow: 1Step constructor in initally posts[] is empaty so 2Step render in nothoing to so
//(because of this flow requirement of condition with terrnary operator ) 3Step control flow come to  componentDidMount
//now after get method (Update setState)posts array have data to show now component will rerender this time post[]
//item will show in browser 