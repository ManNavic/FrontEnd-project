import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './../Login/auth.js';
import './Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);

    if (success) {
      onLogin();
      console.log('User logged in');
      navigate('/');
    } else {
      console.log('Invalid username or password');
    }
  };

  return (
    <div>
      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='login-text'>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='login-input'/>
        </div>
        <div>
          <label className='login-text'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='login-input' />
        </div>
        <div className='.login-button-container'>
          <button type="submit" className='login-button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
