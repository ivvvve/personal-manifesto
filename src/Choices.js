import React, { Component } from 'react';
import Share from './Share.js';
import './App.css';

class Choices extends Component {

    choiceList = this.props.choices.map((c, key) =><p>{c}</p>);
    
    render() {
        {console.log(this.props.choices[0])}
        return (
        <div class="wrapper">
                <h1>Personal manifesto</h1>
            <div id="myManifesto">
                { this.choiceList }
            </div>
            <Share quote='Check out my manifesto'/>
            <h3>Still undecided?</h3>
            <h3 onClick={this.props.rePos}>↶ Compare again</h3>
        </div> 
        )
    }
}

export default Choices;
