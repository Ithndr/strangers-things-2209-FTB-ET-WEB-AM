import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then(response => response.json())
        .then(result => {
          const user = result.data;
          setUser(user);
        })
        .catch(err => console.log(err));
    }
  }, []);

  const login = (ev) => {
    ev.preventDefault();
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { username: username, password: password }
      })
    })
      .then(response => response.json())
      .then(result => {
        const token = result.data.token;
        window.localStorage.setItem('token', token);
        fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
          .then(response => response.json())
          .then(result => {
            const user = result.data;
            setUser(user);
            console.log('logged in');
          })
          .catch(console.error);
      })
      .catch(err => console.log(err));
  };

  const logout = () => {
    window.localStorage.removeItem('token')
    setUser({});
    console.log('Logged out');
  };

  return (
    <div className='login'>
      <form onSubmit={login}>
        <h1>
          Login
        </h1>
        <input
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          placeholder="password"
          type={'password'}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button disabled={!username || !password}>Login</button>
      </form>
    </div>
  );
};
