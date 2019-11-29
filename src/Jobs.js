import React, { Component } from 'react';
import './App.css';

class Policy extends Component {

    render() {
        return (
            <div class="wrapper" id="policyWrapper">
                <h1><span id="policySpan">{this.props.policy.name}</span></h1>
                <ul id="compareDiv">
                    {
                        this.props.policy.options.map((c, key) =>
                            <li onClick={this.props.inc} value={c.answer}>
                            <p key={key}>{c.text}</p>
                        </li>)
                    }
                </ul>
            </div>            
        );
    }
}

export default Policy;
