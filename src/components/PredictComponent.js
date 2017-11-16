import React, {Component} from 'react';

class PredictComponent extends Component {

    render() {
        return (
            <div>
                <button disabled={this.props.predictionDisabled}> Negative </button>
                <button disabled={this.props.predictionDisabled}> Neutral </button>
                <button disabled={this.props.predictionDisabled}> Positive </button>
            </div>)
    }
}

export default PredictComponent