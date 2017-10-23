import React, {Component} from 'react';
import mainActions from '../actions/MainActions'
import PriceComponent from '../components/PriceComponent';
import BackCounterComponent from '../components/BackCounterComponent';

class MainComponent extends Component {


    componentWillMount() {
        mainActions.getPrice();
        //this.setState({updateIntervalID: setInterval(this.count.bind(this), 1000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.updateIntervalID);
    }


    render() {
        return (
            <div>
                <BackCounterComponent></BackCounterComponent>
                <PriceComponent></PriceComponent>
            </div>

        );
    }

}

export default MainComponent;