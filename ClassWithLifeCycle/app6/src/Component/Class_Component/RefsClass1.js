import React, { Component } from 'react'

//1st way :focusing text input
class RefsClass1 extends Component {

    constructor(props) {
        super(props)
    
        this.inputRefs = React.createRef();
    }
    
    //when component mount after loading then focus automatic comes on input 
    componentDidMount(){
        this.inputRefs.current.focus()
        console.log(this.inputRefs);
    }

    clickHandler = () => {
        alert(this.inputRefs.current.value);
    }

    render() {
        return (
            <div>
                <h5>1st way to use Refs in class component</h5>
                <input type='text' ref={this.inputRefs}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsClass1
