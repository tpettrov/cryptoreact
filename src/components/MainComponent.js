import React, {Component} from 'react';
import PriceComponent from '../components/PriceComponent';
import BackCounterComponent from '../components/BackCounterComponent';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {price: 0, backCounterValue: 7};
    }

    componentWillMount() {
        this.getStats();
        this.setState({updateIntervalID: setInterval(this.count.bind(this), 1000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.updateIntervalID);
    }


    count() {

        if (this.state.backCounterValue === 0) {
            this.getStats();
            this.setState({backCounterValue: 7})
        } else {
            this.setState(previousState => {
                return {backCounterValue: previousState.backCounterValue - 1};
            });
        }
    }

    getStats() {

        let that = this;
        let url = 'https://poloniex.com/public?command=returnTicker';
        fetch(url).then(function (response) {
            return response.json()
        }).then(function (data) {
            that.setState({price: data.USDT_ETH.last});
        })

    }


    render() {
        return (
            <div className="App">

                <BackCounterComponent backCounter={this.state.backCounterValue}></BackCounterComponent>
                <PriceComponent price={this.state.price}></PriceComponent>
            </div>

        );
    }

}

export default MainComponent;