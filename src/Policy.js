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
      const policy = this.state.policy;
        if (!policy) {
            return false;
        }

        return (
            <div className="wrapper" id="policyWrapper">
                <h2>{policy.name}</h2>
                {policy.map &&
                    <Postcode inc={this.props.inc} policy={policy} />
                }
                {!policy.map &&
                  <ul id="compareDiv">
                      {policy.options.map((choice, key) =>
                          <li key={key} onClick={choice.nest
                              ? (e) => {this.goNest(e, choice.nest)}
                              : (e) => this.props.inc(e, Object.assign({qid: policy.qid}, choice), policy.name)}
                          >
                              {choice.text}
                          </li>
                      )}
                  </ul>
                }
                {policy.all &&
                    <ul className="all-wrap">
                        <li className="all" onClick={(e) => this.props.inc(e, policy.options.map(choice => Object.assign({qid: policy.qid}, choice)), policy.name)}>All of the above</li>
                    </ul>
                }
                {policy.map &&
                    <ul className="skip-wrap">
                        <li className="skipPolicy" onClick={(e) => this.props.inc(e, null, 'Skip', policy.name)}>Skip this question</li>
                    </ul>
                }
            </div>
        );
    }
}

export default Policy;
