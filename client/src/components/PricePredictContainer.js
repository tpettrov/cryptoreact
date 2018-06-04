import React, {Component} from 'react';
import PredictComponent from './PredictComponent';
import PriceComponent from "./PriceComponent";
import mainStore from "../stores/MainStore";
import ResultsComponent from "./ResultsComponent"

class PricePredictContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastChangeType: 'Nothing yet changed',
            price: 0,
            predictionDisabled: false,
            predictionAttempts: 0,
            predictionValue: 'initial',
            rightAttemps: 0
        };

        mainStore.on(mainStore.eventTypes.PRICE_FETCHED, this.handlePriceFetched.bind(this))
        this.setPredictionValue = this.setPredictionValue.bind(this);
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

        if (this.state.lastChangeType === this.state.predictionValue) {
            this.setState((prevState, props) => ({
                rightAttemps: prevState.rightAttemps + 1
            }));
        }

        this.setState({predictionValue: 'initial'})

    }

    setPredictionValue(value) {
        this.setState({predictionValue: value}, () => console.log(this.state.predictionValue));
        this.setState({predictionDisabled: true});
        this.setState((prevState, props) => ({
            predictionAttempts: prevState.predictionAttempts + 1
        }));
    }


    render() {
        return (
            <div>
                <PriceComponent price={this.state.price}
                                lastChangeType={this.state.lastChangeType}/>
                <PredictComponent predictionState ={this.state.predictionDisabled}
                                  onPrediction={this.setPredictionValue}/>
                <ResultsComponent attemptsCount={this.state.predictionAttempts}
                                  points={this.state.rightAttemps}/>
            </div>)
    }
}

export default PricePredictContainer