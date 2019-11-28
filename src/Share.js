import React, { Component } from 'react';
import {
    FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon
} from 'react-share';
import './App.css';


class Share extends Component {

    shareUrl = "https://google.com";
    title = this.props.quote;

    render() {
        return (
            <div id="shares"><FacebookShareButton
                url={this.shareUrl}
                quote={this.title}><FacebookIcon size={32} round></FacebookIcon>
            </FacebookShareButton>
                <TwitterShareButton
                    url={this.shareUrl}
                    title={this.title}><TwitterIcon size={32} round></TwitterIcon>
                </TwitterShareButton>
                <WhatsappShareButton
                    url={this.shareUrl}
                    title={this.title}><WhatsappIcon size={32} round></WhatsappIcon>
                </WhatsappShareButton>
            </div>
        );
    }
}

export default Share;
