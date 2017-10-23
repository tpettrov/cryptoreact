import React, {Component} from 'react';
import mainActions from '../actions/MainActions'
import PriceComponent from '../components/PriceComponent';
import BackCounterComponent from '../components/BackCounterComponent';

class MainComponent extends Component {


    componentWillMount() {
        mainActions.getPrice();
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