import React, { Component } from 'react';

class BackCounterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {backCounter: 7};
    }

    componentWillMount(){
        setInterval(this.reducer.bind(this), 1000);
    }

    reducer (){
        if (this.state.backCounter == 0) {
            this.setState({backCounter: 7})
        }
        this.setState({backCounter: this.state.backCounter - 1});
    }

    render() {
        return <p className="App-intro">
           Next update after: {this.state.backCounter} s
        </p>
    }
}

export default BackCounterComponent
