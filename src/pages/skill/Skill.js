/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import ProgressBar from './progress.jsx';
import './StyleSkill.css';
import AppContext from '../../context/AppContext.js';
import SkillModal from '../../components/modals/skill/SkillModal.js';

function Skill() {
  const { state, setState } = useContext(AppContext);

  return (
    <>
      <section id="skill" className="skillsSection nine">
        <Fade duration={1000}>
          <h1 className="h1-Text">Dev skills</h1>
          {state.username && (
            <button
              onClick={() =>
                setState({ ...state, skillElement: null, skillModal: true })
              }
            >
              Add Skill
            </button>
          )}
          <ul className="skillList">
            {state.skills.map(({ id, value, name }) => (
              <li key={id}>
                <ProgressBar value={parseInt(value)} name={name} id={id} />
              </li>
            ))}
          </ul>
          <SkillModal />
        </Fade>
      </section>
    </>
  );
}

export default Skill;
