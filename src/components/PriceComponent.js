import React, { Component } from 'react';

class PriceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {price: 0, change:'neutral'};
    }

    componentWillReceiveProps(newProps) {

        if (newProps.price !== this.state.price) {

            this.setState({change: 'positive'});
            console.log('changed positive ' + new Date().toLocaleTimeString());
        } else {
            this.setState({change: 'negative'});
            console.log('changed negative');
        }

        this.setState({price: newProps.price});
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
