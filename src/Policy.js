import React, { Component } from 'react';

import './App.css';
import Postcode from './Postcode';

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

    goNest(e, policy) {
        e.stopPropagation();
        this.setState({policy});
    }

    render() {
        if (!this.state.policy) {
            return false;
        }

        return (
            <div className="wrapper" id="policyWrapper">
                <h1><span id="policySpan">{this.state.policy.name}</span></h1>
                {this.state.policy.map &&
                    <Postcode inc={this.props.inc} options={this.state.policy.options} />
                }
                <ul id="compareDiv">
                    {this.state.policy.options.map((c, key) =>
                        <li key={key} onClick={c.nest ? (e) => {this.goNest(e, c.nest)} : (e) => this.props.inc(e, c.answer, c.text, this.state.policy.name)}>
                            {c.text}
                        </li>
                    )}
                </ul>
                {this.state.policy.all &&
                    <ul>
                        <li className="all" onClick={(e) => this.props.inc(e, this.state.policy.options.map(c => c.answer), 'all', this.state.policy.name)}>All of the above</li>
                    </ul>
                }
                <ul>
                    <li className="skipPolicy" onClick={(e) => this.props.inc(e, null, 'Skip', this.state.policy.name)}>Skip this question</li>
                </ul>
            </div>
        );
    }
}

export default Policy;
