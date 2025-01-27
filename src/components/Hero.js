import React from 'react';
import '../styles/Style.css';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Grid } from '@mui/material';


const Hero = () => {
    return (
        <div className='container'>
            <Grid container spacing={4}>
                <Grid item md={6} xs={110}>
                    <div className='hero'>
                        <section className='text-section'>
                            <h1 className='hero-text' style={{ fontWeight: "800" }}>
                                Front-End Developer
                                <img className='wave-img' src='https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png' />
                            </h1>
                            <p >Hi, I'm Siddharth, a passionate Front-end Developer based in Mumbai 📍</p>
                            <div className='link-icon'>
                                <a href='https://www.linkedin.com/in/siddharth-rupwate' className='social'>
                                    <LinkedIn className='social-icon' />
                                </a>
                                <a href='https://github.com/sidrupwate' className='social'>
                                    <GitHub className='social-icon' />
                                </a>
                            </div>
                        </section>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className='hero'>
                        <section className='image-section'>
                            <img className='hero-img' src='https://media.licdn.com/dms/image/v2/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=L-J1EFIJzlFXa-2bu5K-SqOT0PXYAaPZgXxnpneoF0U' />
                        </section>
                    </div>
                </Grid>
            </Grid>
            <div className='tech-section'>
                <div>
                    <h5 className='tech-text' style={{ fontWeight: "700", marginTop: "10px" }}>Tech Stack</h5>
                </div>
                <div style={{ fontWeight: "700", marginTop: "10px" }} className='dash'>
                    |
                </div>
                <div className='tech-skill'>
                    <div>
                        <img className='tech-image' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5352_-_HTML5-512.png' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://cdn.worldvectorlogo.com/logos/redux.svg' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/sass-512.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
