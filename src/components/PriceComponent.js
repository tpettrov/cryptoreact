import React, {Component} from 'react';
import mainStore from '../stores/MainStore';

class PriceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            change: 'negative'
        };

        mainStore.on(mainStore.eventTypes.PRICE_FETCHED, this.handlePriceFetched.bind(this))
    }


    handlePriceFetched(data) {

        let newFetchedPrice = data.USDT_ETH.last;
        let oldPrice = this.state.price;

        if (Number(oldPrice) < Number(newFetchedPrice)) {
            this.setState({change: 'positive'});
        } else if (Number(oldPrice) === Number(newFetchedPrice)) {
            this.setState({change: 'neutral'});
        } else {
            this.setState({change: 'negative'});
        }
        console.log(`oldprice: ${oldPrice} newprice: ${newFetchedPrice} change: ${this.state.change}`);
        this.setState({price: newFetchedPrice});

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
