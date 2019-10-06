import React, { Component } from 'react'

class Welcome extends Component {
    render() {

        console.log(this.props)

        return <h1>Welcome to Class Component {this.props.name}
            <br /> And Your Hero in Class Component is {this.props.avenger}
        </h1>
    }

}

export default Welcome
