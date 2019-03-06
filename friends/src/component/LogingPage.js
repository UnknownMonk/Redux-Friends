import React, { useState } from 'react';

const LogingPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1>login form</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit({ username, password });
          setUsername('');
          setPassword('');
        }}
      >
        <input
          type="text"
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
          name="username"
          value={username}
        />
        <input
          type="text"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LogingPage;
