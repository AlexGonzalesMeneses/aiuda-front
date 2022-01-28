import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import AppContext from '../../../context/AppContext';
import '../../../styles/Modal.css';
import './StyleLogin.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
  },
};
Modal.setAppElement('#root');

export default function LoginModal() {
  const { state, setState } = useContext(AppContext);
  const acceptedUserName = 'asd';
  const acceptedPassword = 'asd';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function reset() {
    setUsername('');
    setPassword('');
  }

  const handleLogin = event => {
    event.preventDefault();
    if (username == acceptedUserName && acceptedPassword == password) {
      localStorage.setItem('user', acceptedUserName);
      setState({ ...state, loginModal: false, username: acceptedUserName });
      reset();
    } else {
      alert('Access deny');
      reset();
    }
  };

  return (
    <Modal
      isOpen={state.loginModal}
      onRequestClose={() => setState({ ...state, loginModal: false })}
      closeTimeoutMS={200}
      overlayClassName="background"
      style={customStyles}
      className="modal"
    >
      <form onSubmit={handleLogin} className="form">
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
        <div className="buttons">
          <button type="submit" className="button signin">
            Sign in
          </button>
        </div>
      </form>
    </Modal>
  );
}
