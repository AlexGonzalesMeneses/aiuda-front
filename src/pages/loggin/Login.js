import React, { useState } from 'react';
import './StyleLogin.css';

function Login() {
  // const acceptedUserName = 'wisin@yandel.com';
  const acceptedUserName = 'asd';
  const acceptedPassword = 'asd';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [condition, setCondition] = useState(true);
  const [isloggedin, setIsloggedin] = useState(false);

  function toogleLoginForm() {
    setCondition(!condition);
    if (condition == false) {
      reset();
    }
  }
  function exitEditMode() {
    setIsloggedin(false);
  }

  function handleSubmit() {
    if (username == acceptedUserName && acceptedPassword == password) {
      setIsloggedin(true);
      setCondition(!condition);
    } else {
      alert('Acces deny');
      reset();
    }
  }
  function shpwEditMode() {
    alert('edit');
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

  const editButton = <button onClick={shpwEditMode}>Edit</button>;
  const signoutButton = <button onClick={exitEditMode}> Sign out</button>;
  const signinButton = <button onClick={toogleLoginForm}>🔑 Login</button>;
  return (
    <div className="loggin">
      {isloggedin ? signoutButton : signinButton}
      {isloggedin ? editButton : null}
      {condition ? form : null}
    </div>
  );
}

export default Login;
