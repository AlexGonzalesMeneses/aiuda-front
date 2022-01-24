import React, { useState } from 'react';
import './StyleLogin.css';

function Loggin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [condition, setCondition] = useState(true);
  function showHide() {
    setCondition(!condition);
    if (condition == false) {
      cancel();
    }
  }
  function handleSubmit() {
    console.log(username);
    console.log(password);
  }
  function cancel() {
    setUsername('');
    setPassword('');
  }
  const form = (
    <>
      <div className='loginForm'>
        <form onSubmit={handleSubmit} className='form'>
          <p><b>Email address</b></p>
          <input className='inputText'
            type="text"
            value={username}
            placeholder="email@example.com"
            onChange={({ target }) => setUsername(target.value)}
          />
          <p><b>Password</b></p>
          <input className='inputText'
            type="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </form>
        <div className='buttons'>
          <button onClick={cancel} className="button cancel">
            Cancel
          </button>
          <button onClick={handleSubmit} className="button signin">
            Sign in
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="loggin">
      <button onClick={showHide}>Login</button>
      {condition ? form : null}
    </div>
  );
}

export default Loggin;
