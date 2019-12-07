import React, { Component } from 'react';
import ShareAll from './ShareAll.js';
import './App.css';

class Choices extends Component {
    render() {

        const answerString = 'a=' + this.props.choices.map(choice => `${choice.qid}-${choice.aid}`).join('_');

        const choiceList = this.props.choices.map((choice, key) =>
            <div key={key}>
                <h2>{choice.text}</h2>
                <p>{choice.answer}</p>
                {/* <Share policy={choice.answer} /> */}
            </div>);

        return (
            <React.Fragment>

            <div className="wrapper">
                <div id="concludeHed">
                    <div>
                        <h1>Your</h1> 
                        <h1>Personal</h1>
                        <h1>Labour</h1>
                        <h1>Manifesto</h1>
                    </div>
                </div>
                <div id="concludeBody">
                    <h3>Dear voter,</h3>
                    <h3>Based on what you've told us, we've highlighted these key Labour policies which will make a direct difference to your life.</h3>
                    <div id="myManifesto">
                        {/* <div>
                            <h2 className="script">Dear {this.props.name || 'Voter'},</h2>
                        </div> */}
                        { choiceList }
                    </div>
                    <div id="imgRow">
                    </div>
                </div>
            </div>
            <ShareAll message="Here's my personal Labour Manifesto" answerString={answerString} />
            </React.Fragment>
        )
    }
}

export default Choices;
