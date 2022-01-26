/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Slide } from '@stahl.luke/react-reveal';
import emailjs from 'emailjs-com';

function Form() {

  function sendEmail(e) {
    console.log('asd');
    console.log(e.target);
    emailjs
      .sendForm(
        'service_5h73s1k',
        'template_z88i85p',
        e.target,
        'user_kmeI4iamdbCkpu8MDf6Rc'
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <Slide left duration={1000}>
        <div className="eight columns">
          <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
            <div>
              <label>
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactName"
                name="contactName"
              />
            </div>

            <div>
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactEmail"
                name="contactEmail"
              />
            </div>

            <div>
              <label>Subject</label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactSubject"
                name="contactSubject"
              />
            </div>

            <div>
              <label>
                Message <span className="required">*</span>
              </label>
              <textarea
                cols="50"
                rows="15"
                id="contactMessage"
                name="contactMessage"
              ></textarea>
            </div>

            <div>
              <button>Submit</button>
              <span id="image-loader">
                <img alt="" src="images/loader.gif" />
              </span>
            </div>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
      </Slide>
    </>
  );
}

export default Form;
