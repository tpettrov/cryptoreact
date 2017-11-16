import React, {Component} from 'react';
import PredictComponent from './PredictComponent';
import PriceComponent from "./PriceComponent";
import mainStore from "../stores/MainStore";

class PricePredictContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prediction: 'initial',
            lastChangeType: 'Nothing yet changed',
            price: 0,
            predictionDisabled: true
        };

        mainStore.on(mainStore.eventTypes.PRICE_FETCHED, this.handlePriceFetched.bind(this))
    }

    handlePriceFetched(data) {

        let newFetchedPrice = data.USDT_ETH.last;
        let oldPrice = this.state.price;

        if (Number(oldPrice) < Number(newFetchedPrice)) {
            this.setState({lastChangeType: 'positive'});
        } else if (Number(oldPrice) === Number(newFetchedPrice)) {
            this.setState({lastChangeType: 'neutral'});
        } else {
            this.setState({lastChangeType: 'negative'});
        }
        console.log(`oldprice: ${oldPrice} newprice: ${newFetchedPrice} change: ${this.state.lastChangeType}`);
        this.setState({price: newFetchedPrice});
        this.setState({predictionDisabled: false})

    }

    setPredictionValue(value) {
        this.setState({value: value}, () => console.log(this.state.value));
        this.setState({predictionDisabled: true});
        this.setState((prevState, props) => ({
            attempts: prevState.attempts + 1
        }));
    }


    render() {
        return (
            <div>
                <PriceComponent price={this.state.price} lastChangeType={this.state.lastChangeType}/>
                <PredictComponent predictionDisabled={this.state.predictionDisabled}/>
            </div>)
    }
}

export default PricePredictContainer