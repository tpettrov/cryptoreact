import React, { Component } from 'react';

class PriceComponent extends Component {

    render() {
        return <p className="App-intro">
            Eth price is: {this.props.price} $
        </p>
    }
}

export default PriceComponent
