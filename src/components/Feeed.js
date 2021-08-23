import React, {useState, useEffect} from 'react';
import Feed from '../styles/Feed.css';
import Tweetbox from '../components/Tweetbox';
import Post from '../components/Post';
import db from '../firebase/firebase';
import FlipMove from 'react-flip-move';

function Feeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection('posts').onSnapshot(snapshot => {
           setPosts(snapshot.docs.map(doc => doc.data( )))
       })
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <Tweetbox/>
                <FlipMove>
                    {posts.map(post => (
                        <Post 
                        key={post.text}
                        displayName = {post.displayName}
                        username = {post.username}
                        verified = {post.verified}
                        text = {post.text}
                        image = {post.image}
                        avatar = {post.avatar}
                    />
                     ))}
                </FlipMove>

            
           
        </div>
    )
}

export default Feeed
