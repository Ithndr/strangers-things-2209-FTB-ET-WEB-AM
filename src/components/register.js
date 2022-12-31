import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = (ev) => {
        ev.preventDefault();
        fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: { username: username, password: password }
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                console.log('Account Created!');
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            <div className='register'>
                <form onSubmit={register}>
                    <input
                        placeholder='Username'
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}
                    />
                    <input
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button>Register</button>
                </form>
            </div>
            <div>
                <nav>
                    <Link to='/Login'>
                        Click here to login.
                    </Link>
                </nav>
            </div>
        </div>
    );
};
