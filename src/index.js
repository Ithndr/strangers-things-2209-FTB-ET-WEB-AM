import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import posts from './posts';

const App = ()=> {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=> {
    const fetchPosts = async () =>{
      const response = await fetch( 'https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts');
      const data = await response.json();
      setPosts(data);
    }
  }, [])



  return (
    <div>
      <h1>Strangers Things</h1>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/posts'>Posts ({posts.length})</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/home' element={ <div>Home</div>}/>
        <Route path='/posts' element= { <div>Posts</div>}/>
        <Route path='/login' element={ <div>Login</div>} />
        <Route path='/register' element={ <div>Register</div>} />
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
