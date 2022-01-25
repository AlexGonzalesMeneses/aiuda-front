import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import Zmage from 'react-zmage';

function Portafolio(projectList) {
  const { projects } = projectList;
  let id = 0;
  const projectsListJSX = projects.map(({ title, image }) => {
    return (
      <div key={id++} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={title} src={image} />
          <div style={{ textAlign: 'center' }}>{title}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projectsListJSX}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default Portafolio;
