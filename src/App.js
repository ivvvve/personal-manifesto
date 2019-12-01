import React, { Component } from 'react';

import './App.css';
import Policy from './Policy.js';
import Progress from './Progress.js';
import Choices from './Choices.js';
import data from '../data';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      policies: data,
      pos: -1,
      choices: []
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

  addChoice(event, answer, selection, question) {
    event.stopPropagation();
    if (answer) {
      if (Array.isArray(answer)) {
        this.state.choices.push(...answer);
      } else {
        this.state.choices.push(answer);
      }
    }
    window.ga('send', 'event', 'Question', question, selection);
    this.posUp();
  }

  render() {
    if (this.state.pos === -1) {
      return (
        <div className="wrapper" id="intro">
        <h1>Your Personal Manifesto</h1>
        <p>
          Est reprehenderit eu nisi occaecat enim reprehenderit magna. Non laborum Lorem laborum et do velit velit est ex eu velit esse cupidatat. Incididunt commodo sit culpa nulla ut proident nisi ad cillum est enim id nisi incididunt. Nisi incididunt do aliquip veniam reprehenderit eiusmod.
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
        <Choices rePos={this.rePos} choices={this.state.choices}></Choices>
      )
    }
  }
}

export default App;
