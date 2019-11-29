import React, { Component } from 'react';
import './App.css';

class Policy extends Component {

    render() {
        return (
            <div className="wrapper" id="policyWrapper">
                <h1><span id="policySpan">{this.props.policy.name}</span></h1>
                <ul id="compareDiv">
                    {
                        this.props.policy.options.map((c, key) =>
                            <li key={key} onClick={this.props.inc} value={c.answer}>
                            <span onClick={this.props.inc} value={c.answer} key={key}>{c.text}</span>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Policy;
