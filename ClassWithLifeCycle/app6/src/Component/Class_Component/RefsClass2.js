import React, { Component } from 'react'

//2nd way ::focusing text input
class RefsClass2 extends Component {
    constructor(props) {
        super(props)
    
        this.inputRefs = React.createRef();
        this.cdRefs = null;                          //call back ref
        this.setCdRefs = (element) => {              //requirment of element where want set ref. property set
            this.cdRefs = element;
        }
    }
    
    componentDidMount(){  //in this way we do not need cuurent we can access focus direactly
        if(this.cdRefs){
            this.cdRefs.focus()
        }
        console.log(this.cdRefs);
    }

    clickHandler = () => {
        alert(this.cdRefs.value);
    }

    render() {
        return (
            <div>
                <h5>2nd way to use Refs in class component</h5>
                <input type='text' ref={this.setCdRefs}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsClass2
