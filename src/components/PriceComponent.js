import React, {Component} from 'react';
import mainStore from '../stores/MainStore';

class PriceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {price: 0};

        mainStore.on(mainStore.eventTypes.PRICE_FETCHED, this.handlePriceFetched.bind(this))
    }


    handlePriceFetched(data) {

        this.setState({price: data.USDT_ETH.last});
    }

    render() {
        return (
            <div>
                <p className="App-intro"> Eth price is: {this.state.price} $</p>
                <p>Change: {this.state.change} </p>
            </div>)
    }
}

export default PriceComponent
