import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PriceComponent from './components/PriceComponent';
import BackCounterComponent from './components/BackCounterComponent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {price: 0, updateInterval: 0};
    }

    componentWillMount() {
        this.getStats();
        this.setState({updateInterval: setInterval(this.getStats.bind(this), 7000)});
    }

    componentWillUnmount(){
        clearInterval(this.state.updateInterval);
    }

    //https://stackoverflow.com/questions/19135143/synchronization-of-two-timers-setinterval

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
          <h2>Welcome to CryptoReact</h2>
        </div>
          <BackCounterComponent/>
        <PriceComponent price={this.state.price}></PriceComponent>
      </div>
    );
  }
}

export default App;
