/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import ProgressBar from './progress.jsx';
import './StyleSkill.css';
import AppContext from '../../context/AppContext.js';

function Skill() {
  const { state } = useContext(AppContext);

  return (
    <>
      <section id="skill" className="skillsSection nine">
        <Fade duration={1000}>
          <h1 className="h1-Text">Dev skills</h1>
          <ul className="skillList">
            {state.skills.map(({ id, value, name }) => (
              <li key={id}>
                <ProgressBar value={parseInt(value)} text={name} id={id} />
              </li>
            ))}
          </ul>
        </Fade>
      </section>
    </>
  );
}

export default Skill;
