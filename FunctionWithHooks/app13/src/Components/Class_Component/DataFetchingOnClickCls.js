import React, { Component } from 'react'
import axios from 'axios'

class DataFetchingOnClickCls extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             post: {},
             id: 1,
             idFromButtonClick: 1
        }
    }

    handlerClick = () => {
        this.setState({idFromButtonClick : this.state.id})
    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.idFromButtonClick}`)
            .then( res => {
                console.log(res)
                this.setState({post: res.data})
            }) 
            .catch( error => {
                console.log(error);
            })  
    }

    componentDidUpdate(precvProps, prevState) {
        if(prevState.idFromButtonClick !== this.state.idFromButtonClick){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.idFromButtonClick}`)
                .then( res => {
                    console.log(res)
                    this.setState({post: res.data})
                }) 
                .catch( error => {
                    console.log(error);
                })  
            }
    }

    render() {

        const {post, id} = this.state

        return (
            <div>
                <input type='text' value={id} onChange={(e) => this.setState({id: e.target.value})}/>
                <button type='button' value={id} onClick={this.handlerClick}>Fetch Post</button>
                <h6>{post.title}</h6>
                <h6>Complete JSON data : {JSON.stringify(post)}</h6>
                <h6>userId : {JSON.stringify(post.userId)}</h6>
                <h6>id : {JSON.stringify(post.id)}</h6>
                <h6>title : {JSON.stringify(post.title)}</h6>
                <h6>body : {JSON.stringify(post.body)}</h6>
            </div>
        )
    }
}

export default DataFetchingOnClickCls
