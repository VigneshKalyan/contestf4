import React, { useState} from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        window.location.href = '/profile';
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
