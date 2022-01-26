/* eslint-disable no-unused-vars */
import { func } from 'prop-types';
import React, { useState } from 'react';
import './StyleLogin.css';

function Login() {
  const acceptedUserName = 'wisin@yandel.com';
  const acceptedPassword = 'asd';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [condition, setCondition] = useState(false);

  function toogleLoginForm() {
    setCondition(!condition);
    if (condition == false) {
      reset();
    }
  }
  function handleSubmit() {
    if (username == acceptedUserName && acceptedPassword == password) {
      alert('Welcome Wisin y Yandel');
    } else {
      alert('Acces deny');
    }
  }
  function reset() {
    setUsername('');
    setPassword('');
  }
  const form = (
    <div className="loginForm">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="tittleForm">Email address</h3>
        <input
          className="inputText"
          type="text"
          value={username}
          placeholder="email@example.com"
          onChange={({ target }) => setUsername(target.value)}
        />
        <h3 className="tittleForm">Password</h3>
        <input
          className="inputText"
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </form>
      <div className="buttons">
        <button onClick={toogleLoginForm} className="button cancel">
          Cancel
        </button>
        <button onClick={handleSubmit} className="button signin">
          Sign in
        </button>
      </div>
    </div>
  );

  return (
    <div className="loggin">
      <button onClick={toogleLoginForm}>🔑 Login</button>
      {condition ? form : null}
    </div>
  );
}

export default Login;
