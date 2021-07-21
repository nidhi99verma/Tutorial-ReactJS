import React, { Component } from 'react'
import axios from 'axios'

class HttpPostCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: '',
        }
    }
    
    changeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})

    }

    submitHandler = (event) => {
        event.preventDefault() 
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)  //second argument what data to be send
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        })
    }

    render() {

        const { userId, title, body} = this.state

        return (
            <div>
                <h5>POST request to Api</h5>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                        type='text' 
                        name='userId' 
                        value={userId}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                        type='text' 
                        name='title' 
                        value={title}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                        type='text' 
                        name='body' 
                        value={body}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default HttpPostCls

//post request require form validation : library for form validation 'Formic'
//if u are using redux might want to use redux axios middleware
