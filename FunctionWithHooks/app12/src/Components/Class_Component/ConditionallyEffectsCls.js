import React, { Component } from 'react'

class ConditionallyEffectsCls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }
    
    componentDidMount () {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate (precvProps, prevState) {
        if(prevState.count !== this.state.count){
            console.log('Update count in document title');
            document.title = `Clicked ${this.state.count} times`
        }
    }
    
    render() {

        const {count} = this.state;

        return (
            <div>
                <input 
                    type='text' 
                    vlaue={this.state.name} 
                    onChange={e => {this.setState({name: e.target.value})}}
                />
                <button onClick={() => this.setState({count: count + 1})}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ConditionallyEffectsCls

//when we click button then componentDidUpdate will call update count value but when do not have requirement
//to update count value with same value in componentDidUpdate we only try to update value of name but parallelly
//count value will also update(with same) which is not required 

//so we need to use componentDidUpdate render on condition(conditionally render) when actually requirement of 
//update count value(count value change not with same value again and again when value is different from prvious
//count value then update) on this condition