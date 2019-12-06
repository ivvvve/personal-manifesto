import React, { Component } from 'react';
import Share from './Share.js';
import ShareAll from './ShareAll.js';
import './App.css';

class Choices extends Component {
    render() {

        const answerString = 'a=' + this.props.choices.map(choice => `${choice.qid}-${choice.aid}`).join('_');

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
                        <h2 className="script">Dear {this.props.name || 'Voter'},</h2>
                        <p>Here's what a Labour government would do for you:</p>
                    </div>
                    { choiceList }
                    <div>
                        <h2 className="script">Signed,</h2>
                        <h2>The Labour Party</h2>
                    </div>
                </div>
                {/* <div className="reset">
                    <p>Reset to get new personalised policies for you or a friend</p>
                    <a className="btn" onClick={() => this.props.rePos()}>Reset</a>
                </div> */}

                <div id="share">
                    <ShareAll message="Here's my personal Labour Manifesto" answerString={answerString} />
                </div>
            </div>
        )
    }
}

export default Choices;
