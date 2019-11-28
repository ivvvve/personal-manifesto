import React, { Component } from 'react';
import './App.css';
import Policy from './Policy.js';
import Choices from './Choices.js';

class App extends Component {
  
  
  constructor(props){
    super(props)
    this.state = {
      policies: [
        { name: "the NHS", 
          options: [
            { text: "Society? There's no such thing as society!", party: "con", src:"John McDonnell, Channel 4 News, broadcast 20th November 2019", url: "http://google.com"},
            { text: "You can cut all the flowers, but you can't stop the spring.", party: "lab", src: "John McDonnell, Channel 4 News, broadcast 20th November 2019", url: "http://google.com"}
          ]
        },
        { name: "education",
          options: [
            { text: "no fees", party: "lab", src: "John McDonnell, Channel 4 News, broadcast 20th November 2019", url: "http://google.com"},
            { text: "more fees", party: "con", src: "John McDonnell, Channel 4 News, broadcast 20th November 2019", url: "http://google.com"}
          ]
        },
        { name: "housing",
          options: [
            { text: "more houses", party: "lab", src: "John McDonnell, Channel 4 News, broadcast 20th November 2019", url: "http://google.com"},
            { text: "no houses", party: "con", src: "John McDonnell, Channel 4 News, broadcast 20th November 2019", url: "http://google.com"}
          ]
        }
      ],
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

  addChoice(event) {
    let inner = event.target.innerText;
    for (let i = 0; i < this.state.policies.length; i++) {
      let policy = this.state.policies[i];
      let opts = policy.options
      for (let x = 0; x < opts.length; x++) {
        let policyChoice = opts[x];
        if (opts[x].text === inner) {
          console.log(policyChoice);
          this.state.choices.push(policyChoice);
        }
      }
    }

    this.posUp();
  }

  render() {
    if (this.state.pos === -1) {
      return (
        <div class="wrapper" id="intro">
        <h1>Compare the policies</h1>
        <p>
          Est reprehenderit eu nisi occaecat enim reprehenderit magna. Non laborum Lorem laborum et do velit velit est ex eu velit esse cupidatat. Incididunt commodo sit culpa nulla ut proident nisi ad cillum est enim id nisi incididunt. Nisi incididunt do aliquip veniam reprehenderit eiusmod.
        </p>
        <p class="btn" onClick={this.posUp}>Continue ↷</p>
      </div>
      )
    } else if (this.state.pos < this.state.policies.length) {
      return(<Policy inc={this.addChoice} dec={this.posDown}policy={this.state.policies[this.state.pos]}></Policy>)
    } else {
      return (
        <Choices rePos={this.rePos} choices={this.state.choices}></Choices>
      )
    }
  }
}

export default App;
