import React, {Component} from 'react';

class PredictComponent extends Component {

    parentCaller(predictionValue){
        this.props.onPrediction(predictionValue);
    }

    render() {
        return (
            <div>
                <button disabled={this.props.predictionState} onClick={this.parentCaller.bind(this,'negative')}> Negative </button>
                <button disabled={this.props.predictionState} onClick={this.parentCaller.bind(this,'neutral')}> Neutral </button>
                <button disabled={this.props.predictionState} onClick={this.parentCaller.bind(this,'positive')}> Positive </button>
            </div>)
    }
}

export default PredictComponent