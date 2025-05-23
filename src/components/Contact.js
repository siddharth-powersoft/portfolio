import React from 'react';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import '../styles/Style.css';

const ContactComponent = () => {
  return (
    <>
      <div id='contact' className='contact'>
        <h4 style={{ color: "blue", fontWeight: "800" }}>CONTACT</h4>
        {/* <h2 style={{ fontWeight: "800", margin: "2rem 0" }}>Hit Me Up!</h2> */}
        <div>
          <Email className='contact-icon' />
          <a className='contactdetail' href="mailto:sidrrupwate@gmail.com">sidrrupwate@gmail.com</a>
        </div>
        <div>
          <Phone className='contact-icon' />
          <a className='contactdetail' href="tel:+918652503057">+91 8652503057</a>
        </div>
        <div>
          <LocationOn className='contact-icon' />
          <span className='contactdetail'>Kalyan, Mumbai</span>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
