import React, { Component } from 'react';
import {
    FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon
} from 'react-share';
import './App.css';


class Share extends Component {
    render() {
        const shareUrl = process.env.PUBLIC_URL;
        const title = this.props.policy;

        return (
            <div className="shares">
                <FacebookShareButton
                    url={`${shareUrl}?utm_source=Facebook%20Share`}
                    quote={title}
                    beforeOnClick={() => window.ga('send', 'event', 'Share', 'Facebook', title)}
                >
                    <FacebookIcon size={32} round></FacebookIcon>
                    Share
                </FacebookShareButton>
                <TwitterShareButton
                    url={`${shareUrl}?utm_source=Twitter%20Share`}
                    title={title}
                    beforeOnClick={() => window.ga('send', 'event', 'Share', 'Twitter', title)}
                >
                    <TwitterIcon size={32} round></TwitterIcon>
                    Tweet
                </TwitterShareButton>
                <WhatsappShareButton
                    url={`${shareUrl}?utm_source=WhatsApp%20Share`}
                    title={title}
                    beforeOnClick={() => window.ga('send', 'event', 'Share', 'Whatsapp', title)}
                >
                    <WhatsappIcon size={32} round></WhatsappIcon>
                    Share
                </WhatsappShareButton>
            </div>
        );
    }
}

export default Share;