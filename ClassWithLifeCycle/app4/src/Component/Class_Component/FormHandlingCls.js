import React, { Component } from 'react'

class FormHandlingCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    handelUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handelCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handelTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`
            Username : ${this.state.username}
            Comment : ${this.state.comments}
            topic: ${this.state.topic}
            `)
        
        event.preventDefault()  //it will prevent default behaviour of browser, after submit stope reloading 
    }
    
    

    render() {

        //const {username, comments, topic} = this.state;

        return (
            <>
                <h5>Form heading in Class component</h5>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input 
                            type='text' 
                            value={this.state.username} 
                            onChange={this.handelUsernameChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Comments </label>
                        <textarea 
                            value={this.state.comments} 
                            onChange={this.handelCommentsChange}
                        >
                        </textarea>
                    </div>
                    <br/>
                    <div>
                        <label>Topic  </label>
                        <select value={this.state.topic} onChange={this.handelTopicChange}>
                            <option vlaue='react'>React</option>
                            <option vlaue='angular'>Angular</option>
                            <option vlaue='vue'>Vue</option>
                        </select>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </>
        )
    }
}

export default FormHandlingCls
