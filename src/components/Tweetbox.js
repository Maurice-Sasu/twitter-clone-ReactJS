import { Button, Avatar, Input } from '@material-ui/core';
import React, {useState} from 'react';
import '../styles/Tweetboxx.css';
import db from '../firebase/firebase';

function Tweetbox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName : "",
            username : "neeta_crent",
            verified : true,
            text : tweetMessage,
            image : tweetImage,
            avatar : "https://images.pexels.com/photos/2317922/pexels-photo-2317922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        })
        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div  className="tweetBox">
            <form>
                <div className='tweetBox__input'>
                <Avatar src="https://images.pexels.com/photos/2317922/pexels-photo-2317922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text"

                />

                <input 
                    value={tweetImage }
                    onChange={e => setTweetImage(e.target.value)}
                    className='tweetBox__inputImage' 
                    placeholder="Optional: Enter image URL" 
                    type="text"

                />
                
                </div>
                <Button 
                    onClick={sendTweet} 
                    type="submit" 
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
