import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '/Users/mantas/Desktop/Boolean/React/project/src/components/Login/auth.js';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the login function to handle the login logic
    const success = login(username, password);

    if (success) {
      // Call the onLogin function to update the isLoggedIn state
      onLogin();
      console.log('User logged in');
      navigate('/');
    } else {
      // Handle invalid login credentials
      console.log('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
