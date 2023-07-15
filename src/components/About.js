import React from 'react';
import { Grid } from '@mui/material';
import '../styles/Style.css';
import { Feed } from '@mui/icons-material';
// import AboutImage from '../images/image/AboutImage.png';

const About = () => {
    return (
        <div id='about' className='about'>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <img className='about-img' src={"https://previews.dropbox.com/p/thumb/AB8qqTAWjQ1TQvIci21Z2gbi_JFxewPNrfzHUL9qhSPGzkK6hc-WswTKAv-QwOX5uBEFUck5wV0LpUsMLAaf-F21zE4OvdIA5Tpcztn23dJKe_1Es0N60qQve_X3C78mb0j54XVIA8PraHELciOMSttrzVk3VxLm3nskvFa8BC6bGbAXbdEgMy0S6Tf675XKnFc95CTSPXbJDx_29GOzszDp5IOhb16PtKVQM9UBcJMbSGOTtk3_msR57xYEsH5JkuWlWOJe-2Nf5Gv-NwbLvZ-MF8mxEfMIdAXEI4cdOsBbLQDea2sMaYs3NH4esaIiSG7Sf89904aWqdGxlEPeK9-8/p.png"} alt="About" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className='about-text'>
                        <h4 style={{ color: "blue", fontWeight: "800" }}>ABOUT ME</h4>
                        <h2 style={{ fontWeight: "800" }}>A dedicated Front-end Developer based in Mumbai 📍</h2>
                        <p className='hero-text' style={{ fontWeight: "500", color: "gray" }}>
                            I am a passionate and driven individual with a strong interest in web development and building dynamic and engaging user interfaces using the React JavaScript Library. I have completed relevant coursework or have prior experience in web development and programming languages such as HTML, CSS, and JavaScript.
                            <br />
                            <br />
                            I am gaining valuable hands-on experience in React development, working on real-world projects, and learning from experienced developers. I am eager to continue developing my skills and building my career as a React Developer.
                        </p>
                        <div>
                            <a href='https://www.dropbox.com/s/2s2mmsqd7lqkc7c/Siddharth%27s%20Resume.pdf?dl=0' className='social'>
                                <Feed style={{ fontSize: "35px" }} />
                                <span style={{ fontWeight: "800", margin: "0 5px", textAlign: "center" }}>View Resume</span>
                            </a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
