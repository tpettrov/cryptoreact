import React, {Component} from 'react';
import mainActions from '../actions/MainActions'
import PriceComponent from '../components/PriceComponent';
import BackCounterComponent from '../components/BackCounterComponent';
import PredictComponent from '../components/PredictComponent';

class MainComponent extends Component {


    componentWillMount() {
        mainActions.getPrice();
    }

    render() {
        return (
            <div>
                <BackCounterComponent></BackCounterComponent>
                <PriceComponent></PriceComponent>
                <PredictComponent/>
            </div>

        );
    }

}

export default MainComponent;