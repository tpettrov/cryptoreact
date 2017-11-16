import React, {Component} from 'react';
import mainActions from '../actions/MainActions'
import BackCounterComponent from '../components/BackCounterComponent';
import PricePredictContainer from "./PricePredictContainer";

class MainComponent extends Component {


    componentWillMount() {
        mainActions.getPrice();
    }

    render() {
        return (
            <div>
                <BackCounterComponent></BackCounterComponent>
                <PricePredictContainer/>
            </div>

        );
    }

}

export default MainComponent;