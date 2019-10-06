import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })

        this.setState(prevState => ({
            count: prevState.count + 1 
        })
        )



    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <font size={this.state.count}>count - {this.state.count}</font>
                <br />
                <br /><br />
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
                <button onClick={() => this.incrementFive()}>IncrementFive</button>
            </div>
        )
    }
}

export default Counter
