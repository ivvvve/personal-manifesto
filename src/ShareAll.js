import React, { Component } from 'react';
import {
    FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon
} from 'react-share';
import './App.css';
import { white } from 'color-name';


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
        const title = this.props.message;

        return (
            <div id="concludeFooter">
                <h3>Share your Personal Manifesto now and show your friends and family what a Labour government would do for you!</h3>

                <div>
                    <FacebookShareButton
                        url={`${shareUrl}&utm_source=Facebook%20Share`}
                        quote={title}
                        beforeOnClick={() => window.gtag('event', 'share', {method: 'Facebook', event_label: title})}
                    >
                        <FacebookIcon size={40} borderRadius={40}></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`${shareUrl}&utm_source=Twitter%20Share`}
                        title={title}
                        beforeOnClick={() => window.gtag('event', 'share', {method: 'Twitter', event_label: title})}
                    >
                        <TwitterIcon size={40} borderRadius={40}></TwitterIcon>
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={`${shareUrl}&utm_source=WhatsApp%20Share`}
                        title={title}
                        beforeOnClick={() => window.gtag('event', 'share', {method: 'Whatsapp', event_label: title})}
                    >
                        <WhatsappIcon size={40} borderRadius={40}></WhatsappIcon>
                    </WhatsappShareButton>
                </div>
            </div>
        );
    }
}

export default ShareAll;
