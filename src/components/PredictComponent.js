import React, {Component} from 'react';
import mainStore from '../stores/MainStore';

class PredictComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            predictionDisabled: false,
            attempts: 0
        };

        mainStore.on(mainStore.eventTypes.PRICE_FETCHED, this.setPredictionState.bind(this));
    }
    setPredictionValue(value){
        this.setState({value: value}, () => console.log(this.state.value));
        this.setState({predictionDisabled: true});
        this.setState((prevState, props) => ({
            attempts: prevState.attempts + 1
        }));
    }
    setPredictionState(){
        this.setState({predictionDisabled: false});
    }
    render() {
        return (
            <div>
                <button onClick={this.setPredictionValue.bind(this, 'negative')} disabled={this.state.predictionDisabled}> Negative </button>
                <button onClick={this.setPredictionValue.bind(this, 'neutral')} disabled={this.state.predictionDisabled}> Neutral </button>
                <button onClick={this.setPredictionValue.bind(this, 'positive')} disabled={this.state.predictionDisabled}> Positive </button>
                <p>Attempts: {this.state.attempts} </p>
            </div>)
    }
}

export default PredictComponent