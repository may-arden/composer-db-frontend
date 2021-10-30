import React from 'react';

class Counter extends React.Component {

    constructor() {
        super()
        this.state ={
            count: 0
        }
    }

    increment = () => {
        const newCount = this.state.count + 1
        this.setState({
            count: newCount 
        })
    }

    render() {

        return (
            <button onClick={this.increment}>
                {this.state.count} upvotes 
            </button>
        )
    }
}

export default Counter; 