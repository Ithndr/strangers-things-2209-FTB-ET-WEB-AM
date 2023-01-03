import React, { useState, useEffect } from 'react';
export const MyPosts = (props) => {
    const myPost = props.posts;
    return (
        <div className='postBox'>
            {myPost.map((post) => {
                return (
                    <div
                        key={post._id}
                        className={post.isAuthor ? 'singlePost myPost' : 'singlePost'}
                    >
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>Price: {post.price}</p>
                        <p>post created: {post.createdAt}</p>
                        <div className='postChanges'>
                            {post.isAuthor ? <button onClick={ev => { deletePost(post._id); console.log(post._id) }}>Delete</button> : null}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}