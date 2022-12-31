import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { ShowPosts } from './components/showPosts';
import { Login } from './components/login';
import { Register } from './components/register';




const App = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchPosts = async (setPosts) => {
      fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts')
      .then(response => response.json())
      .then(result => {
        setPosts(result.data.posts);
      })
      .catch(console.error);
    }
    fetchPosts(setPosts);
  }, [])



  return (
    <div>
      <h1 id='title'>Strangers Things</h1>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/posts'>Posts ({posts.length})</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<div>Home</div>} />
        <Route path='/posts' element={<ShowPosts posts={posts} />} />
        <Route path='/login' element={<Login login={user} />} />
        <Route path='/register' element={<Register register={user} />} />
      </Routes>
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
