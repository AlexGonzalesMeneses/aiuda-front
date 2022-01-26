import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import Form from '../../components/forms/Form';
import AsideContact from '../../components/aside/AsideContact';
import useFetch from '../../hooks/useFetch';

function Contact() {
  const {
    error,
    loading,
    data: profile,
  } = useFetch('http://localhost:4000/profile');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{profile.message}</p>
          </div>
        </div>
      </Fade>
      <div className="row">
        <Form />
        <AsideContact {...profile} />
      </div>
    </section>
  );
}

export default Contact;
