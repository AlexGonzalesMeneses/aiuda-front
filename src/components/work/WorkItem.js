import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

export default function WorkItem({ id, company, title, years, description }) {
  const { state, removeWork, setWorkElement } = useContext(AppContext);

  return (
    <>
      <h3>{company}</h3>
      <p className="info">
        {title} <span>&bull;</span>
        <em className="date">{years}</em>
      </p>
      <p>{description}</p>
      {state.username && (
        <>
          <button onClick={() => removeWork(id)}>Delete</button>
          <button
            onClick={() =>
              setWorkElement({ id, company, title, years, description })
            }
          >
            Edit
          </button>
        </>
      )}
    </>
  );
}

WorkItem.propTypes = {
  id: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
