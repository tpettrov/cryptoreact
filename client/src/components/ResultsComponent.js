import React, {Component} from 'react';

class ResultsComponent extends Component {



    render() {
        return (
            <div>
                <p>Your attempts: {this.props.attemptsCount}</p>
                <p>Your points: {this.props.points}</p>
            </div>)
    }
}

export default ResultsComponent