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

export default function PortfolioModal() {
  const { state, setState, addPortfolio, updatePortfolio } =
    useContext(AppContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const handleAddPortfolio = event => {
    event.preventDefault();
    state.portfolioElement
      ? updatePortfolio({
          id: state.portfolioElement.id,
          title,
          category,
          image,
          url,
        })
      : addPortfolio({ title, category, image, url });
    reset();
  };

  useEffect(() => {
    if (state.PortfolioElement) {
      setTitle(state.portfolioElement.title);
      setCategory(state.portfolioElement.category);
      setImage(state.portfolioElement.image);
      setUrl(state.portfolioElement.url);
    } else {
      setTitle('');
      setCategory('');
      setImage('');
      setUrl('');
    }
  }, [state.portfolioElement]);

  function reset() {
    setTitle('');
    setCategory('');
    setImage('');
    setUrl('');
  }

  return (
    <Modal
      isOpen={state.portfolioModal}
      onRequestClose={() => setState({ ...state, portfolioModal: false })}
      closeTimeoutMS={200}
      overlayClassName="background"
      style={customStyles}
      className="modal"
    >
      <form onSubmit={handleAddPortfolio} className="form">
        <h3 className="tittleForm">Title</h3>
        <input
          className="inputText"
          type="text"
          value={title}
          placeholder="title"
          onChange={({ target }) => setTitle(target.value)}
        />
        <h3 className="tittleForm">Category</h3>
        <input
          className="inputText"
          type="text"
          value={category}
          placeholder="12"
          onChange={({ target }) => setCategory(target.value)}
        />
        <h3 className="tittleForm">Image</h3>
        <input
          className="inputText"
          type="text"
          value={image}
          placeholder="12"
          onChange={({ target }) => setImage(target.value)}
        />
        <h3 className="tittleForm">Url</h3>
        <input
          className="inputText"
          type="text"
          value={url}
          placeholder="12"
          onChange={({ target }) => setUrl(target.value)}
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
