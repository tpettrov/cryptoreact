import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PriceComponent from './components/PriceComponent';
import BackCounterComponent from './components/BackCounterComponent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {price: 0, backCounterValue: 7};
    }

    componentDidMount() {
        this.getStats();
        this.setState({updateInterval: setInterval(this.count.bind(this), 1000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.updateInterval);
    }


    count() {

        if (this.state.backCounterValue == 0) {
            this.getStats();
            this.setState(previousState => {
            return {backCounterValue: previousState.backCounterValue + 7}
            });
        } else {

            this.setState(previousState => {
                return {backCounterValue: previousState.backCounterValue - 1};
            });
        }
    }

    getStats() {

        let that = this;
        let url = 'https://api.coinmarketcap.com/v1/ticker/ethereum/';
        fetch(url).then(function (response) {
            return response.json()
        }).then(function (data) {
            that.setState({price: data[0].price_usd});
        })

    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to CryptoReact</h2>
                </div>
                <BackCounterComponent backCounter={this.state.backCounterValue}/>
                <PriceComponent price={this.state.price}></PriceComponent>
            </div>
        );
    }
}

export default App;
