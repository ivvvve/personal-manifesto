import React, { Component } from 'react';
import './App.css';

class Policy extends Component {

    
    render() {
        return (
            <div class="wrapper" id="policyWrapper">
                <h1>Compare the policies on <span id="policySpan">{this.props.policy.name}</span></h1>
                <ul id="compareDiv">
                    <li id="policyOne" class="policyHeader" onClick={this.props.inc}>{this.props.policy.options[0].text}</li> 
                    <li id="policyTwo" class="policyHeader" onClick={this.props.inc}>{this.props.policy.options[1].text}</li>
                </ul>
            </div>
        );
    }
}

export default Policy;
