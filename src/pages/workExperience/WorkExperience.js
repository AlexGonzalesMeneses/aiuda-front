/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';

function WorkExperience(props) {
  const educationList = props.work.map(work =>{
    console.log(work);
    console.log(work.company);
    console.log(work['company']);
    return(
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title} <span>&bull;</span>
          <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    )
  })

  const educationItem = (
    <>
      <div>
        <h3>tile</h3>
        <p className="info">
          master <span>&bull;</span>
          <em className="date">fecha</em>
        </p>
        <p>descripción</p>
      </div>
    </>
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
