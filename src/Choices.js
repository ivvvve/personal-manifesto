import React, { Component } from 'react';
import Share from './Share.js';
import './App.css';

class Choices extends Component {
    render() {
        const choiceList = this.props.choices.map((c, key) =>
            <div key={key}>
                <Share policy={c} />
                <p>{c}</p>
            </div>);

        return (
            <div className="wrapper">
                <h1>Your Personal Labour Manifesto</h1>
                <div id="myManifesto">
                    { choiceList }
                </div>
                <div className="restart">
                    <h3>Still undecided?</h3>
                    <div className="btn" onClick={this.props.rePos}>← Start again</div>
                </div>
            </div>
        )
    }
}

export default Choices;
