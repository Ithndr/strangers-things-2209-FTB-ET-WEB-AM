import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sendMessage } from './sendMessage';


export const SinglePost = (props) => {
    const [message, setMessage] = useState('');
    const posts = props.posts;
    const postID = useParams().id;
    const post = posts.find(post => post._id === postID)
    const user = props.user;
    console.log(posts)

    return (
        <div
            key={post._id}
            className={post.isAuthor ? 'singlePost myPost' : 'singlePost'}
        >
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <div className='postChanges'>
                {post.isAuthor ? <button onClick={ev => console.log('well that doesnt work yet')}>Edit</button> : null}
                {post.isAuthor ? <button onClick={ev => { deletePost(post._id); window.location.reload() }}>Delete</button> : null}
                {post.isAuthor ? null :
                    <form>
                        <input
                            placeholder="Message Seller"
                            value={message}
                            onChange={(ev) => setMessage(ev.target.value)}
                        />
                        <button onClick={ev => {sendMessage(postID, message)}}>Send</button>
                    </form>
                }
            </div>
            <p className='timestamp'>post created: {post.createdAt}</p>
        </div>
    )
}