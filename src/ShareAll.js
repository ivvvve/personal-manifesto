import React, { Component } from 'react';
import {
    FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon
} from 'react-share';
import './App.css';


class ShareAll extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        const answerString = this.props.answerString;

        const shareUrl = process.env.PUBLIC_URL + '?' + answerString + '&name=' + this.state.name;
        const title = this.props.policy;

        return (
            <div className="all-share-wrap">
                <h2>Share this with a friend</h2>
                <p>Instruction for sharing</p>
                <div className="name-field">
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="all-shares">
                    <FacebookShareButton
                        url={`${shareUrl}&utm_source=Facebook%20Share`}
                        quote={title}
                        beforeOnClick={() => window.ga('send', 'event', 'Share', 'Facebook', title)}
                    >
                        <FacebookIcon size={50} round></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`${shareUrl}&utm_source=Twitter%20Share`}
                        title={title}
                        beforeOnClick={() => window.ga('send', 'event', 'Share', 'Twitter', title)}
                    >
                        <TwitterIcon size={50} round></TwitterIcon>
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={`${shareUrl}&utm_source=WhatsApp%20Share`}
                        title={title}
                        beforeOnClick={() => window.ga('send', 'event', 'Share', 'Whatsapp', title)}
                    >
                        <WhatsappIcon size={50} round></WhatsappIcon>
                    </WhatsappShareButton>
                </div>
            </div>
        );
    }
}

export default ShareAll;
