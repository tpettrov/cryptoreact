import React, {Component} from 'react';
import logo from '../logo.svg';


class HeaderComponent extends Component {

    render(){
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to CryptoReact</h2>
            </div>
        );
    }


}

export default HeaderComponent;
