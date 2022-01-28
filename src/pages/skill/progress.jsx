import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import AppContext from '../../context/AppContext';

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${props => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 50px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 50px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

const ProgressBar = ({ value, max, color, width, name, id }) => {
  const { state, removeSkill, setSkillElement } = useContext(AppContext);

  return (
    <Container color={color} width={width}>
      <span>{name + '\t'}</span>
      <progress value={value} max={max} />
      <span>{(value / max) * 100}%</span>
      {state.username && (
        <>
          <button onClick={() => removeSkill(id)}>Delete</button>
          <button onClick={() => setSkillElement({ id, name, value })}>
            Edit
          </button>
        </>
      )}
    </Container>
  );
};

ProgressBar.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: 'lightBlue',
  width: '400px',
  text: 'skill',
};

export default ProgressBar;
