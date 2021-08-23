import React from 'react';
import Widget from '../styles/Widget.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetsContainer">
                <h2>What's happening ?</h2>
                <TwitterTweetEmbed tweetId={"1424488042606206977"}/>

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="mauric__e"
                options={{height: 400}}
                />

                <TwitterShareButton
                    url={'https://facebook.com/maurice.anani.9'}
                    options={{ text: '#reactjs is awesome', via: 'maurice.anani.9' }}
                />
            </div>
        </div>
    )
}

export default Widgets
