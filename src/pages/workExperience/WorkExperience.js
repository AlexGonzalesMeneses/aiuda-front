/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import WorkItem from '../../components/work/WorkItem';
import AppContext from '../../context/AppContext';
import WorkModal from '../../components/modals/work/WorkModal';

function WorkExperience() {
  const { state, setState, loadWorks } = useContext(AppContext);

  useEffect(() => {
    loadWorks();
  }, []);

  const handleAdd = () => {
    setState({
      ...state,
      workModal: true,
    });
  };

  return (
    <section id="resume">
      <Fade duration={1000}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
              {state.username && <button onClick={handleAdd}>Add Work</button>}
            </h1>
          </div>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {state.works.map(({ id, company, title, years, description }) => (
                <WorkItem
                  key={id}
                  id={id}
                  company={company}
                  title={title}
                  years={years}
                  description={description}
                />
              ))}
              <WorkModal />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default WorkExperience;
