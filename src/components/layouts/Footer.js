import React from 'react';
import { Fade } from '@stahl.luke/react-reveal';
import useFetch from '../../hooks/useFetch';

function Footer() {
  const {
    error,
    loading,
    data: social,
  } = useFetch('http://localhost:4000/social');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const networks = social.map(({ id, url, className }) => (
    <li key={id}>
      <a href={url}>
        <i className={className}></i>
      </a>
    </li>
  ));

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 Nordic Giant</li>
              <li>
                Design by{' '}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
