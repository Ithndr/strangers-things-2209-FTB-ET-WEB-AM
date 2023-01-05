import React, { useState, useEffect } from 'react';
import { deletePost } from './deletePost';
export const MyPosts = (props) => {
    const myPost = props.myPosts;
    const user = props.user;
    console.log(myPost)
    return (
        <form>
        <div className='myPostBox'>
            {myPost.map((post) => {
                if (post.isAuthor) {
                    return (
                        <div
                            key={post._id}
                            className={post.isAuthor ? 'singlePost myPost' : 'singlePost'}
                        >
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <p>Price: {post.price}</p>
                            <p className='timestamp'>post created: {post.createdAt}</p>
                            <div className='postChanges'>
                                {post.isAuthor ? <button onClick={ev => { deletePost(post._id); console.log(post._id) }}>Delete</button> : null}
                                {post.isAuthor ? <button onClick={ev => { console.log('well this doesnt work yet') }}>Edit</button> : null}
                            </div>
                        </div>
                    );
                }
            })}
        </div>
        <div className='messageBox'>
        <div className='sent'>
            <h1>Sent Messages</h1>
            {user.messages?.map((msg) =>{
                if(msg.fromUser.username === user.username)
                return(
                    <div>
                        <h3>Post Title: {msg.post.title}</h3>
                        <p>From: You</p>
                        <p>Message: {msg.content}</p>
                    </div>
                )
            }
            )}
        </div>
        <div className='received'>
            <h1>Received Messages</h1>
            {user.messages?.map((msg) =>{
                if(msg.fromUser.username !== user.username)
                return(
                    <div>
                        <h3>Post Title: {msg.post.title}</h3>
                        <p>From: {msg.fromUser.username}</p>
                        <p>Message: {msg.content}</p>
                    </div>
                )
            }
            )}
        </div>
        </div>
        </form>
    )
}