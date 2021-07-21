import React from 'react';

//nammming convention withCounter file name
// const withCounter = (WrappedComponent) => {
//     class WithCounter extends React.Component {

const UpdateComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCount = () => {
            this.setState( prevState => {
                return { count: prevState.count + incrementNumber}
            })
        }

        render() {
            return (
                <OriginalComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props}                      //passed down what ever props is remaining 
                 />                                      //props have been specified
            )
        }
    }
    return NewComponent
}

export default UpdateComponent

//this function that accept OriginalComponent and return NewComponent

// when u try to pass props it pass to HOC but not to copmponet that is wrapped

//librey for Hoc: connect in redux
//librey for Hoc: router in react router
//librey for Hoc: style in material UI
