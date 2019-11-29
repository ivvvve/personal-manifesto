import React, { Component } from 'react';
import {
    FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon
} from 'react-share';
import './App.css';


class Share extends Component {
    render() {
        const shareUrl = process.env.PUBLIC_URL;
        const title = this.props.quote;
        
        return (
            <div id="shares">
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                >
                    <FacebookIcon size={32} round></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                >
                    <TwitterIcon size={32} round></TwitterIcon>
                </TwitterShareButton>
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                >
                    <WhatsappIcon size={32} round></WhatsappIcon>
                </WhatsappShareButton>
            </div>
        );
    }
}

export default Share;
