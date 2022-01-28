import React, { useContext, useEffect, useState } from 'react';
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

export default function SkillModal() {
  const { state, setState, addSkill, updateSkill } = useContext(AppContext);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleAddSkill = event => {
    event.preventDefault();
    state.skillElement
      ? updateSkill({
          id: state.skillElement.id,
          name,
          value,
        })
      : addSkill({ name, value });
    reset();
  };

  useEffect(() => {
    if (state.skillElement) {
      setName(state.skillElement.name);
      setValue(state.skillElement.value);
    } else {
      setName('');
      setValue('');
    }
  }, [state.skillElement]);

  function reset() {
    setName('');
    setValue('');
  }

  return (
    <Modal
      isOpen={state.skillModal}
      onRequestClose={() => setState({ ...state, skillModal: false })}
      closeTimeoutMS={200}
      overlayClassName="background"
      style={customStyles}
      className="modal"
    >
      <form onSubmit={handleAddSkill} className="form">
        <h3 className="tittleForm">Name</h3>
        <input
          className="inputText"
          type="text"
          value={name}
          placeholder="name"
          onChange={({ target }) => setName(target.value)}
        />
        <h3 className="tittleForm">Value</h3>
        <input
          className="inputText"
          type="text"
          value={value}
          placeholder="12"
          onChange={({ target }) => setValue(target.value)}
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
