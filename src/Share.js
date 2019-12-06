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
            <div className="share-wrap">
                <span>Share this policy</span>
                <div className="shares">
                    <FacebookShareButton
                        url={`${shareUrl}?utm_source=Facebook%20Share`}
                        quote={title}
                        beforeOnClick={() => window.gtm('event', 'Share', {event_category: 'Facebook', event_label: title})}
                    >
                        <FacebookIcon size={30} round></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`${shareUrl}?utm_source=Twitter%20Share`}
                        title={title}
                        beforeOnClick={() => window.gtm('event', 'Share', {event_category: 'Twitter', event_label: title})}
                    >
                        <TwitterIcon size={30} round></TwitterIcon>
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={`${shareUrl}?utm_source=WhatsApp%20Share`}
                        title={title}
                        beforeOnClick={() => window.gtm('event', 'Share', {event_category: 'Whatsapp', event_label: title})}
                    >
                        <WhatsappIcon size={30} round></WhatsappIcon>
                    </WhatsappShareButton>
                </div>
            </div>
        );
    }
}

export default Share;
