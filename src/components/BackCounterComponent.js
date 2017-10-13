import React, { Component } from 'react';

class BackCounterComponent extends Component {

    render() {
        return <p className="App-intro">
           Next update after: {this.props.backCounter} s
        </p>
    }
}

export default BackCounterComponent
