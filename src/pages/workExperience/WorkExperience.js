/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import useFetch from '../../hooks/useFetch';

function WorkExperience() {
  const {
    error,
    loading,
    data: works,
  } = useFetch('http://localhost:4000/works');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const educationList = works.map(
    ({ id, company, title, years, description }) => {
      return (
        <div key={id}>
          <h3>{company}</h3>
          <p className="info">
            {title} <span>&bull;</span>
            <em className="date">{years}</em>
          </p>
          <p>{description}</p>
        </div>
      );
    }
  );

  return (
    <section id="resume">
      <Fade duration={1000}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationList}</div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default WorkExperience;
