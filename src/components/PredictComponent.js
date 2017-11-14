import React, {Component} from 'react';

class PredictComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    setPredictionValue(value){
        this.setState({value: value}, () => console.log(this.state.value));
    }
    render() {
        return (
            <div>
                <button onClick={this.setPredictionValue.bind(this, 'negative')}>Negative</button>
                <button onClick={this.setPredictionValue.bind(this, 'neutral')}>Neutral</button>
                <button onClick={this.setPredictionValue.bind(this, 'positive')}>Positive</button>
            </div>)
    }
}

export default PredictComponent