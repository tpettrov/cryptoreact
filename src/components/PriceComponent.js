import React, { Component } from 'react';

class PriceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {price: 0};
    }

    shouldComponentUpdate(newProps) {

        if (newProps.price !== this.state.price) {

            this.setState({change: 'positive'});
            console.log('changed positive ' + new Date().toLocaleTimeString());
            this.setState({price: newProps.price});
            return true;
        } else {
            return false;
            this.setState({change: 'negative'});
            console.log('changed negative');

        }


    }

    render() {
        return (
        <div>
            <p className="App-intro"> Eth price is: {this.state.price} $</p>
            <p>Change: {this.state.change} </p>
        </div>)
    }
}

export default PriceComponent
