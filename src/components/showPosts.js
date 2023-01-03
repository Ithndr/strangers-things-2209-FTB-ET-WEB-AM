import React, { useState, useEffect } from 'react';
import { createPost } from './createPosts';
import { deletePost } from './deletePost';
import { message } from './message';

export const ShowPosts = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [message, setMessage] = useState('');
    const post = props.posts;
    return (
        <div className='postPage'>
            <div className='postBox'>
                {post.map((post) => {
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
                            </div>
                            {/* <div className='messageBox'>
                                {post.isAuthor ? null : <input placeholder='Message to seller'
                                    value={message}
                                    onChange={(ev) => setMessage(ev.target.value)}
                                />}
                                {post.isAuthor ? null : <button onClick={ev => { message(post._id, message); console.log('message clicked') }}>Send</button>}
                            </div> */}
                            <p>post created: {post.createdAt}</p>
                        </div>
                    );
                })}
            </div>
            <div className='createSideBar'>
                <button onClick={ev => {
                    createPost(title, description, price, willDeliver);
                    window.location.reload()
                }}>Create New Post</button>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <input
                    placeholder="Description"
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                />
                <input
                    placeholder="Price"
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)}
                />
                <div className='checkDeliver'>
                    <input
                        type='checkbox'
                        value={willDeliver}
                        onChange={(ev) => setWillDeliver(ev.target.checked)}
                    />
                    <label>Will Deliver?</label>
                </div>
            </div>
        </div>
    )
}


