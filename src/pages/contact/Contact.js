import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import Form from '../../components/forms/Form';
import AsideContact from '../../components/aside/AsideContact';

function Contact(formData) {
  const { message } = formData;
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
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>
      <div className="row">
        <Form />
        <AsideContact {...formData} />
      </div>
    </section>
  );
}

export default Contact;
