import { useState } from 'react';

let isLoggedIn = false;

const checkLoginStatus = () => {
  const token = localStorage.getItem('token');
  isLoggedIn = !!token;
};

const login = (username, password) => {
  if (username === 'admin' && password === 'password') {
    const token = generateToken();
    localStorage.setItem('token', token);
    isLoggedIn = true;
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem('token');
  isLoggedIn = false;
};

const generateToken = () => {
  const token = Math.random().toString(36).substr(2);
  return token;
};

const isUserLoggedIn = () => {
  return isLoggedIn;
};

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(isLoggedIn);

  const handleLogin = (username, password) => {
    const success = login(username, password);
    if (success) {
      setAuthenticated(true);
    }
    return success;
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
  };

  return {
    isLoggedIn: authenticated,
    login: handleLogin,
    logout: handleLogout,
  };
};

export {
  checkLoginStatus,
  login,
  logout,
  generateToken,
  isUserLoggedIn,
  useAuth,
};

