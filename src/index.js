import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { ShowPosts } from './components/showPosts';
import { Login } from './components/login';
import { Register } from './components/register';
import { MyPosts } from './components/myPosts';
import { SinglePost } from './components/singlePost';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const fetchPosts = async (setPosts) => {
      fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(response => response.json())
      .then(result => {
        setPosts(result.data.posts);
      })
      .catch(console.error);
    }
    fetchPosts(setPosts);
    console.log(user);
  }, [])

  const logout = () => {
    window.localStorage.removeItem('token')
    setUser({});
    console.log('Logged out');
    window.location.reload();
  };

  return (
    <div>
      <nav className='navBar'>
        <Link to='/myposts'>My Posts</Link>
        <Link to='/posts'>All Posts ({posts.length})</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <h1 id='title'>Strangers Things</h1>
      <h3>{user.username}</h3>
      <button onClick={logout}>Logout</button>
      <Routes>
        <Route path='/myposts' element={<MyPosts myPosts = {posts} user={user} setUser={setUser}/>} />
        <Route path='/posts/:id' element={<SinglePost posts={posts} user={user} />} />
        <Route path='/posts' element={<ShowPosts posts={posts} setUser={setUser}/>} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/register' element={<Register register={user} />} />

      </Routes>
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
