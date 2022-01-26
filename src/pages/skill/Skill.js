/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';

import ProgressBar from './progress.jsx';
import './StyleSkill.css';
import useFetch from '../../hooks/useFetch.js';
function Skill() {
  const {
    error,
    loading,
    data: skills,
  } = useFetch('http://localhost:4000/skills');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const skillList = skills.map(({ id, value, name }) => {
    return (
      <li key={id}>
        <ProgressBar value={parseInt(value)} text={name} />
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
