import React, {Component} from 'react';


class PriceComponent extends Component {

    render() {
        return (
            <div>
                <p className="App-intro"> Eth price is: {this.props.price} $</p>
                <p>Last change: {this.props.lastChangeType} </p>
            </div>)
    }
}

export default PriceComponent
