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
                    Hey there! I’m Siddharth, a Front-End Developer who’s passionate about building sleek, interactive user interfaces. There's nothing more exciting to me than bringing a design to life with clean, responsive code—turning ideas into seamless digital experiences.

                    ☕ Coffee is my fuel, and coding is my craft. I love the process of fine-tuning UIs, optimizing performance, and making web applications feel intuitive and effortless to use. But when I step away from the screen, you’ll find me exploring nature with my camera in hand. I have a deep love for photography, especially capturing the raw beauty of nature. Whether it’s a quiet sunrise or the stillness of a forest, I find inspiration in the little details that make the world around us so breathtaking.
                    <br />
                    <br />
                    <br />


                    There’s something about coding and photography that feels connected—both require patience, creativity, and an eye for detail. Whether I’m designing a UI or framing a perfect shot, I always strive to create something meaningful.
                    <br />
                    💼 For more professional projects, <a href='https://www.dropbox.com/scl/fi/uyyycc2p6g11697g8hor9/SIDDHARTH-R-2.pdf?rlkey=52e185t5ekqna5ioro6ff2la2&st=qsx44fj6&dl=0'>
                        <span>click here to view my resume</span>
                    </a> and explore my work!
                    🚀 Let’s build something amazing together—one pixel at a time!</p>
            </div>
        </div >
    );
}

export default About;
