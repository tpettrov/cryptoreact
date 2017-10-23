import React, {Component} from 'react';
import MainActions from '../actions/MainActions';

class BackCounterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backCounterValue: 7
        };

    }

    componentWillMount() {
        this.setState({updateIntervalID: setInterval(this.count.bind(this), 1000)});
    }

    count() {

        if (this.state.backCounterValue === 0) {
            MainActions.getPrice();
            this.setState({backCounterValue: 7})
        } else {
            this.setState(previousState => {
                return {backCounterValue: previousState.backCounterValue - 1};
            });
        }
    }

    render() {
        return <p className="App-intro">
            Next update after: {this.state.backCounterValue} s
        </p>
    }
}

export default BackCounterComponent
