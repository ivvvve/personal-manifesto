import React, { Component } from 'react';
import Share from './Share.js';
import './App.css';

class Choices extends Component {
    render() {
        const choiceList = this.props.choices.map((choice, key) =>
            <div key={key}>
                <h3>{choice.text}</h3>
                <p>{choice.answer}</p>
                <Share policy={choice.answer} />
            </div>);

        return (
            <div className="wrapper">
                <h1>Your Personal Labour Manifesto</h1>
                <div id="myManifesto">
                    <div>
                        <h2 class="script">Dear Name,</h2>
                        <p>Here's what a Labour government would do for you:</p>
                    </div>
                    { choiceList }
                    <div>
                        <h2 class="script">Signed,</h2>
                        <h2>The Labour Party</h2>
                    </div>
                </div>
                <h2>Share</h2>
            </div>
        )
    }
}

export default Choices;
