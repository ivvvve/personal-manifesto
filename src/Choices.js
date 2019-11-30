import React, { Component } from 'react';
import Share from './Share.js';
import './App.css';

class Choices extends Component {
    render() {
        const choiceList = this.props.choices.map((c, key) =><p key={key}>{c}</p>);
        
        return (
        <div className="wrapper">
            <h1>Personal manifesto</h1>
            <div id="myManifesto">
                { choiceList }
            </div>
            <Share/>
            <h3>Still undecided?</h3>
            <h3 onClick={this.props.rePos}>↶ Compare again</h3>
        </div> 
        )
    }
}

export default Choices;
