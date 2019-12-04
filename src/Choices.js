import React, { Component } from 'react';
import Share from './Share.js';
import './App.css';

class Choices extends Component {
    render() {
        const choiceList = this.props.choices.map((c, key) =>
            <div key={key}>
                <h3>{c[1]}</h3>
                <p onClick="">{c[0]}</p>
                <Share policy={c} />
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
