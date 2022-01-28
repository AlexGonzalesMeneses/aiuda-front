import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import AppContext from '../../../context/AppContext';
import '../../../styles/Modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
  },
};
Modal.setAppElement('#root');

export default function WorkModal() {
  const { state, setState, addWork } = useContext(AppContext);
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [years, setYears] = useState('');
  const [description, setDescription] = useState('');

  const handleAddWork = event => {
    event.preventDefault();
    addWork({ company, title, years, description });
    reset();
  };

  function reset() {
    setCompany('');
    setTitle('');
    setYears('');
    setDescription('');
  }

  return (
    <Modal
      isOpen={state.workModal}
      onRequestClose={() => setState({ ...state, workModal: false })}
      closeTimeoutMS={200}
      overlayClassName="background"
      style={customStyles}
      className="modal"
    >
      <form onSubmit={handleAddWork} className="form">
        <h3 className="tittleForm">Company</h3>
        <input
          className="inputText"
          type="text"
          value={company}
          placeholder="email@example.com"
          onChange={({ target }) => setCompany(target.value)}
        />
        <h3 className="tittleForm">Title</h3>
        <input
          className="inputText"
          type="text"
          value={title}
          placeholder="Software Engineer"
          onChange={({ target }) => setTitle(target.value)}
        />
        <h3 className="tittleForm">Years</h3>
        <input
          className="inputText"
          type="text"
          value={years}
          placeholder="January - December"
          onChange={({ target }) => setYears(target.value)}
        />
        <h3 className="tittleForm">Description</h3>
        <input
          className="inputText"
          type="text"
          value={description}
          placeholder="Full Stack developer training"
          onChange={({ target }) => setDescription(target.value)}
        />

        <div className="buttons">
          <button type="submit" className="button signin">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
