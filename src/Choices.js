import React, { Component } from 'react';
import Share from './Share.js';
import './App.css';

class Choices extends Component {

    choiceList = this.props.choices.map((c, key) =>
        <li>
            <p key={key} onClick={this.shareFu} class={c.party}>{c.text}</p>
            <a href={c.url}>{c.src}</a>
            <Share quote={('"' + c.text + '"' + '\n\nThat\'s why I\'m voting for the policies. Make your own mind up here!')}> </Share>
        </li>
    );

    partyPercs(arr) {
        let choiceNames = arr.map(item => item.party);
        let labCount = this.partyCount(choiceNames,"lab");
        let conCount = this.partyCount(choiceNames,"con");
        let labPerc = String(labCount/choiceNames.length*100).split(".")[0];
        let conPerc = String(conCount / choiceNames.length * 100).split(".")[0];
        if (Number(labPerc) > Number(conPerc)) {
            return (<div id="overview">
                <h2>You prefer Labour policies to Conservative policies.</h2>
                <h3>But what policy is the reason you're going to vote? Share these policies below with your friends and family.</h3>

            </div>)
        } else {
            return (<div id="overview">
                <h2>You prefer Conservative policies to Labour policies.</h2>
                <h3>But what policy is the reason you're going to vote? Share these policies below with your friends and family.</h3>

            </div>)
        }
    }
    
    partyCount(arr, str){
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            if (el === str){
                result++;
            }
        }
        return result;
    }
    
    render() {
        return (
        <div class="wrapper">
            <h1>Compare the policies</h1>
            <div id="resultsHeader">
                {this.partyPercs(this.props.choices)}
            </div>
            <ul>
                {this.choiceList}
            </ul>
                <h3>Still undecided?</h3>
                <h3 onClick={this.props.rePos}>↶ Compare again</h3>
        </div> 
        )
    }
}

export default Choices;
