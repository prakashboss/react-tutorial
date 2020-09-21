import React, { Component } from 'react';


class Counter5 extends Component {
    state = { 
        count: 0

    
     };
     incCount = () => {
       const { count } = this.state;
       this.setState({
            count: count + 5,
    });
};

    render() { 
        return ( <div>
            <h1>The Count is {this.state.count}</h1>
            <button onClick= {this.incCount}>Increment Count</button>

        </div>
        );
    }
}



export default Counter5;