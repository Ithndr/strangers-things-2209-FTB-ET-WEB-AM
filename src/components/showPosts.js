import React, { useState, useEffect } from 'react';
import { createPost } from './createPosts';
import { deletePost } from './deletePost';
import { message } from './sendMessage';
import { Link } from 'react-router-dom';

export const ShowPosts = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [message, setMessage] = useState('');
    const post = props.posts;
    // const redirectposts = (postID) => {
    //     window.location.href = `/dist/index.html#/posts/${postID}`;
    //   }
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
                            {/* {post.isAuthor ? null : <button onClick={ev => { redirectposts(post._id) ; console.log('message clicked') }}>Message Seller</button>} */}
                            {post.isAuthor ? null : <Link to={`/posts/${post._id}`}>Message Seller</Link>}
                            <p className='timestamp'>post created: {post.createdAt}</p>
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


