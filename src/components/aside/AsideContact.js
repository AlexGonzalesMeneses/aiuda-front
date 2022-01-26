import React from 'react';
import { Slide } from '@stahl.luke/react-reveal';

function AsideContact(formData) {
  const { name, street, city, state, zip, phone } = formData;
  return (
    <Slide right duration={1000}>
      <aside className="four columns footer-widgets">
        <div className="widget widget_contact">
          <h4>Address and Phone</h4>
          <p className="address">
            {name}
            <br />
            {street} <br />
            {city}, {state} {zip}
            <br />
            <span>{phone}</span>
          </p>
        </div>

        <div className="widget widget_tweets">
          <h4 className="widget-title">Latest Tweets</h4>
          <ul id="twitter">
            <li>
              <span>
                This is Photoshops version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum
                <a href="./">http://t.co/CGIrdxIlI3</a>
              </span>
              <b>
                <a href="./">2 Days Ago</a>
              </b>
            </li>
            <li>
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                <a href="./">http://t.co/CGIrdxIlI3</a>
              </span>
              <b>
                <a href="./">3 Days Ago</a>
              </b>
            </li>
          </ul>
        </div>
      </aside>
    </Slide>
  );
}

export default AsideContact;
