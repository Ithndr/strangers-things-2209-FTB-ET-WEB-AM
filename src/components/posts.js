import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

const Create = ({posts,setPosts}) =>{
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log('title, body: ', title, body);
        const response = await fetch(' https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts',{
            method: "POST", 
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ token }` 
            },
            body: JSON.stringify({
                title,
                body,
        })
    });

    const data = await response.json();
    console.log('data',data);
    setPosts([data,...posts]);
    setTitle('');
    setBody('');
    }


    
    return <>
        <h3>
            Create a Post
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='title' value={title} onChange=
            {(event)=> setTitle(event.target.value)}></input>
            <input type="text" placeholder='body' valie={body} onChange=
            {(event)=> setBody(event.target.value)}></input>
            <button type='submit' className='btn
            btn-outline-primary'>Submit</button>
        </form>
    </>
}



 







export default posts;