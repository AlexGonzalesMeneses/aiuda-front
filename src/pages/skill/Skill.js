/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';

import ProgressBar from './progress.jsx';
import './StyleSkill.css';
function Skill(props) {
  const skillList = props.skills.map(skill => {
    return (
      <li key={skill.name}>
        <ProgressBar value={parseInt(skill.value)} text={skill.name} />
      </li>
    );
  });

  return (
    <>
      <section id="skill" className="skillsSection nine">
        <Fade duration={1000}>
          <h1 className="h1-Text">Dev skills</h1>
          <ul className="skillList">{skillList}</ul>
        </Fade>
      </section>
    </>
  );
}

export default Skill;
