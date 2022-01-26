import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import Zmage from 'react-zmage';
import useFetch from '../../hooks/useFetch';

function Portafolio() {
  const {
    error,
    loading,
    data: projects,
  } = useFetch('http://localhost:4000/projects');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const projectsListJSX = projects.map(({ id, title, image }) => {
    return (
      <div key={id} className="columns portfolio-item">
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
