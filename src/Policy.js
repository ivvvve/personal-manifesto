import React, { Component } from 'react';
import './App.css';

class Policy extends Component {
    state = {
        policy: null
    };
    
    componentDidMount() {
        this.setState({policy: this.props.policy});
    }
    
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        if (nextProps.policy && this.props.policy && nextProps.policy.name !== this.props.policy.name) {
            this.setState({policy: nextProps.policy});
        }
    }
    
    goNest(policy) {
        this.setState({policy});
    }

    render() {
        if (!this.state.policy) {
            return false;
        }

        return (
            <div className="wrapper" id="policyWrapper">
                <h1><span id="policySpan">{this.state.policy.name}</span></h1>
                <ul id="compareDiv">
                    { this.state.policy.options.map((c, key) =>
                        <li key={key} onClick={c.nest ? () => {this.goNest(c.nest)} : this.props.inc} value={c.answer}>
                            <span onClick={c.nest ? () => {this.goNest(c.nest)} : this.props.inc} value={c.answer} key={key}>{c.text}</span>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Policy;
