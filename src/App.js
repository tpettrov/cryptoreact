import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {price: 0};
    }

    componentDidMount() {
        this.getStats();
    }

    getStats() {

        let that = this;
        let url = 'https://api.coinmarketcap.com/v1/ticker/ethereum/';

        fetch(url).then(function(response) {
            return response.json()
        }).then(function(data) {
            that.setState({price: data[0].price_usd});
        })

    }



    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Eth price is: {this.state.price} $
        </p>
      </div>
    );
  }
}

export default App;
