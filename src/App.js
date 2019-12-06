import React, { Component } from 'react';

import './App.css';
import Policy from './Policy.js';
import Progress from './Progress.js';
import Choices from './Choices.js';
import data from '../data';

const getUrlParameter = (param) => {
  param = param.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + param + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

class App extends Component {
  constructor(props){
    super(props)

    let pos = -1;
    const choices = [];

    const existing = getUrlParameter('a');
    const name = getUrlParameter('name') || '';

    if (existing) {
      try {
        existing.split('_').forEach(q => {
          const [qid, aid] = q.split('-');
          const question = data.find(d => d.qid === Number(qid));
          if (question) {
            const answers = [];

            const flat = (question) => {
              question.options.forEach(answer => {
                if (answer.nest) {
                  flat(answer.nest);
                } else if (answer.aid) {
                  answers.push(answer);
                }
              });
            };

            flat(question);

            const answer = answers.find(a => a.aid === Number(aid));
            if (answer) {
              choices.push(Object.assign({qid: question.qid}, answer));
            }
          }
        })

        if (choices.length) {
          pos = data.length;
        }
      } catch(e) {
        console.error('Invalid answer string', e);
        // Couldn't parse existing answers,
      }
    }

    this.state = {
      policies: data,
      pos,
      choices,
      name
    }
    this.posUp = this.posUp.bind(this);
    this.posDown = this.posDown.bind(this);
    this.rePos = this.rePos.bind(this);
    this.addChoice = this.addChoice.bind(this);
  }

  posUp() {
    if (this.state.pos < this.state.policies.length + 1) {
      this.setState({pos: this.state.pos + 1})
    }
  };

  posDown() {
    if (this.state.pos >= 0 ){
      this.setState({ pos: this.state.pos - 1 })
      this.state.choices.pop();
    }
  }

  rePos() {
    this.setState({ choices: []});
    this.setState({ pos: -1 });
  }

  addChoice(event, choice, question) {
    event.stopPropagation();
    if (choice && choice.answer) {
      if (Array.isArray(choice)) {
        this.state.choices.push(...choice);
        window.gtag('event', 'Question', {
          event_category: question,
          event_label: 'all'
        });
        window.fbq('trackCustom', 'Question', {
          question,
          answer: 'all'
        });
      } else {
        this.state.choices.push(choice);
        window.gtag('event', 'Question', {
          event_category: question,
          event_label: choice.text
        });
        window.fbq('trackCustom', 'Question', {
          question,
          answer: choice.text
        });
      }
    }
    this.posUp();
  }

  render() {
    if (this.state.pos === -1) {
      return (
        <div className="wrapper" id="intro">
        <h1>Your Personal Manifesto</h1>
        <p>
          Want to find out what a Labour government would do for you and the people you care about? Simply fill out this quick quiz and we'll tell you about the key Labour policies that will make a direct difference to your life, or to the life of a friend, family member or colleague.
        </p>
        <div className="btn" onClick={this.posUp}>Continue →</div>
      </div>
      )
    } else if (this.state.pos < this.state.policies.length) {
      return(
        <React.Fragment>
          <Progress pos={this.state.pos} total={this.state.policies.length} />
          <Policy inc={this.addChoice} dec={this.posDown} policy={this.state.policies[this.state.pos]} pos={this.state.pos}></Policy>
        </React.Fragment>

      )
    } else {
      return (
        <Choices rePos={this.rePos} choices={this.state.choices} name={this.state.name}></Choices>
      )
    }
  }
}

export default App;
