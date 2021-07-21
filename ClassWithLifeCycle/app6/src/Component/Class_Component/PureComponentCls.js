import React, { PureComponent } from 'react'

class PureComponentCls extends PureComponent {
    render() {
        console.log('*****Pure Component Render*****');
        return (
            <div>
                <h5>Pure Component {this.props.name}</h5>
            </div>
        )
    }
}

export default PureComponentCls

