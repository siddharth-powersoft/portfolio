import React from 'react';
import { Grid } from '@mui/material';
import '../styles/Style.css';
import { Feed } from '@mui/icons-material';
import AboutImage from '../images/image/AboutImage.png';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-text'>
                <h4 style={{ color: "blue", fontWeight: "800" }}>🌟ABOUT ME</h4>
                <h2 style={{ fontWeight: "800" }}>A dedicated Front-end Developer based in Mumbai 📍</h2>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <img className='about-img' src={AboutImage} alt="About" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                </Grid>
                <br />
                <p className='about-text' style={{ fontWeight: "500", color: "gray" }}>
                    Hi, I'm Siddharth — a Front-End Developer who enjoys creating clean, responsive, and user-friendly web applications. I love bringing designs to life with well-structured code and making sure that every website feels smooth, fast, and easy to use.

                    I focus on building interfaces that not only look good but also perform well across all devices. Writing clean code, improving performance, and making websites accessible and intuitive are things I truly care about.
                    <br />
                    <br />
                    <br />


                    I believe that good development is all about attention to detail, patience, and creativity. Whether it's refining a button animation or optimizing page load speed, I enjoy every part of the process.

                    I’m always excited to learn new technologies, improve my skills, and take on new challenges.
                    💼 Feel free to explore my <a href='https://www.dropbox.com/scl/fi/uyyycc2p6g11697g8hor9/SIDDHARTH-R-2.pdf?rlkey=52e185t5ekqna5ioro6ff2la2&st=qsx44fj6&dl=0'>
                        <span>resume</span>
                    </a> and check out my work. I’m looking forward to building something amazing, one pixel at a time!                    <br />
                </p>
            </div>
        </div >
    );
}

export default About;
