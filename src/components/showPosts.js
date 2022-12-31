import React, { useState, useEffect } from 'react';
import { createPost } from './createPosts';

export const ShowPosts = (props) => {
    const post = props.posts;
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={createPost}>Create New Post</button>
            {post.map((post) => {
                return (
                    <div
                        key={post.id}
                        className={post.isAuthor ? 'singlePost myPost' : 'singlePost'}
                    >
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>Price: {post.price}</p>
                        <p>post created: {post.createdAt}</p>
                        {post.isAuthor ? <button>Edit</button>: null}
                        {post.isAuthor ? <button>Delete</button>: null}
                    </div>
                );
            })}
        </div>
    )
}


