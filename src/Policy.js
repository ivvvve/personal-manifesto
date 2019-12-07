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

    hasAll(obj) {
        if(obj.all) {
            return <li className="choice" onClick={(e) => this.props.inc(e, obj.options.map(choice => Object.assign({ qid: obj.qid }, choice)), obj.name)}>All of the above</li>
        }
    }

    render() {
      const policy = this.state.policy;
        if (!policy) {
            return false;
        }

        return (
            <div className="wrapper" id="policyWrapper">
                <p className="secondaryBtn" onClick={this.props.dec}>Go back</p>
                <h1>{policy.name}</h1>
                {policy.map &&
                    <Postcode inc={this.props.inc} policy={policy} />
                }
                {!policy.map &&
                  <ul>
                      {policy.options.map((choice, key) =>
                          <li className="choice" key={key} onClick={choice.nest
                              ? (e) => {this.goNest(e, choice.nest)}
                              : (e) => this.props.inc(e, Object.assign({qid: policy.qid}, choice), policy.name)}
                          >
                              {choice.text}
                          </li>
                      )}
                      {this.hasAll(policy)}
                  </ul>
                }
                {policy.map &&
                    <p id="skipBtn" className="secondaryBtn" onClick={(e) => this.props.inc(e, null, 'Skip', policy.name)}>Skip this step</p>
                }
            </div>
        );
    }
}

export default Policy;
