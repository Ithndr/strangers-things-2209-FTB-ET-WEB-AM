import React, { useState, useEffect } from 'react';
export const MyPosts = (props) => {
    const myPost = props.myPosts;
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
        </div>
        <div className='received'>
            <h1>Received Messages</h1>
        </div>
        </div>
        </form>
    )
}