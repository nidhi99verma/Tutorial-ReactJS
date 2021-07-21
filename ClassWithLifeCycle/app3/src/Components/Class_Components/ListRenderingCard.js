import React, { Component } from 'react'

class ListRenderingCard extends Component {
    
    render() {
       
        return (
            <div>
                  <h6>I am {this.props.personInfo.name}, my age {this.props.personInfo.age} and my skill {this.props.personInfo.skill}.</h6>
                  {/* {this.props.personInfo.key} */}{/* get warning  when try to use key because key prop is reserved*/}
            </div>
        )
    }
}

export default ListRenderingCard
