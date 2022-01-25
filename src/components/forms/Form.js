import React, { useState } from 'react';
import { Slide } from '@stahl.luke/react-reveal';

function Form() {
  const [nameValue, setNameValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);
  const [subjValue, setSubjValue] = useState(null);

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmailValue(e.target.value);
  }

  function handleChangeSubject(e) {
    setSubjValue(e.target.value);
  }

  function handleChangeMessage(e) {
    setMessageValue(e.target.value);
  }

  function handleSubmit(e) {
    alert(
      `Name: ${nameValue}\nEmail: ${emailValue}\nSubject: ${subjValue}\nMessage: ${messageValue}`
    );
    e.preventDefault();
  }

  return (
    <>
      <Slide left duration={1000}>
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={handleChangeName}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChangeEmail}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={handleChangeSubject}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  onChange={handleChangeMessage}
                ></textarea>
              </div>

              <div>
                <button className="submit" onSubmit={handleSubmit}>
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
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
