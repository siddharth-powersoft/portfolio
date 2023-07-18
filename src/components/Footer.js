import React from 'react';
import '../styles/Style.css';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <a style={{ textDecoration: "none", color: "gray" }} href="#">
          <h1 className='logo' style={{ fontWeight: "700", color: "gray" }}>sid<span style={{ color: "red" }} className='logo'>.</span>dev</h1>
        </a>
        <div className='copyright'>&copy; {new Date().getFullYear()} All rights reserved.</div>
        <div className="social-icons">
          <a href='https://www.linkedin.com/in/siddharth-rupwate' className='social'>
            <LinkedIn className='social-icon' style={{ color: "white" }} />
          </a>
          <a href='https://github.com/sidrupwate' className='social'>
            <GitHub className='social-icon' style={{  color: "white" }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
