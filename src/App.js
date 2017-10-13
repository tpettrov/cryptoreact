import React, {Component} from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import HeaderComponent from './components/HeaderComponent';

class App extends Component {

render(){
    return(
        <div className="App">
            <HeaderComponent/>
            <MainComponent/>
        </div>
    );
}

}

export default App;
