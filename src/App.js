import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {ethstats: []};
    }

    componentDidMount() {
        this.getStats();
    }

    getStats() {
        return fetch('https://api.coinmarketcap.com/v1/ticker/ethereum')
            .then((data) => {
                this.setState({ ethstats: data });
            });
    }



    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Eth price is: {this.state.ethstats}
        </p>
      </div>
    );
  }
}

export default App;
