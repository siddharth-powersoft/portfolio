import React from 'react';
import { Grid } from '@mui/material';
// import LoginPage from '../images/image/LoginPage.png';
// import ProductPage from '../images/image/ProductPage.png';
// import CheckoutPage from '../images/image/CheckoutPage.png';
// import Weather from '../images/image/Weather.png';
import '../styles/Style.css';
import { GitHub } from '@mui/icons-material';

const Project = () => {
    return (
        <>
            <div id='project' className='project'>
                <div className='project-text1'>
                    <h4 style={{ color: "blue", fontWeight: "800" }}>PROJECT</h4>
                    <h3 style={{ fontWeight: "800", fontSize: "25px" }}>Every Project is a unique piece of Development 🧩</h3>
                    <h3 style={{ fontWeight: "800", fontSize: "25px" }}>SHOPPING APP</h3>
                    <p className='hero-text' style={{ fontWeight: "500", color: "gray" }}>
                        The React Shopping App is an online platform where users can browse and purchase various products from a catalog. The website will provide users with a seamless shopping experience, allowing them to add products to their cart and checkout.
                    </p>
                    <a href='https://github.com/sidrupwate/React-Final-Project' className='social'><GitHub style={{ fontSize: "35px" }} /><span style={{ fontWeight: "800", margin: "0 5px" }}>Code</span></a>
                </div>
                <div className='project-img-section'>
                    <Grid className='project-img-grid' style={{ padding: "150px" }} container spacing={0}>
                        <Grid item xs={12} sm={0} md={5}>
                            <img height={300} width={200} className='project-img' src={"https://previews.dropbox.com/p/thumb/AB_vQTnb8jHoqURtJNlyzg9a0K8oXAtPVyGDqpzKgRNFEiD85Ig_seP6xVN_QpvHV_7hv5APXvZX5aruohS7DBOZgI3i4pImMk681SUc9UlrwMM9axcmGG30CMeZLcbIyyC6z-Vl_dWqTiHwtLBx30qrdix-PeJ51PpptH3fwTdGquIf47tkcaKQ0Cb6sjZ3U7MP0sNymp-BPYFXVD4CMYe0jKH8Su2r3zGI6VL9pg6moWacwz1Ir1nogSaoOmlk8m2henN90DhvxLXoMTw2deEQhRefbsSqCBEvT8f45fPWeZDLZt2Qmisidis3Qdp_RNC9X_9caeAikWT9yBd40jnj/p.png"} alt='Login Page' />
                        </Grid>
                        <Grid style={{ marginTop: "40px" }} item xs={12} sm={0} md={7}>
                            <img height={250} width={500} className='project-img' src={"https://previews.dropbox.com/p/thumb/AB-ZmRJJiu2GdCsCf5sX0B9VxFCMbJdZUFA6T5FWtjnKZUVj8BkCtjwlHFsxl9g-bZCrbrEPMYxCoAt9u6tXLBW3Vt8_cwipDIvaSqDM2vEXIhq0fvNHedInV5JHhPB5JYn6-1p5ZOPYd06F2775Ovo7k2JyWKzQegwhJjUbkbEx91xC0JX4s_YlP40txvZgR0rjs2ivM0bpi49deEIleB8G75XAHawRMtEGGzZBzgCgHa6oaraTROL4a9XT3DmPxvIDV1NIqaY6DM-0txp3HiC4ggtay8z7JKLjlA-DG599FwgCxeiZeO3KZIuzZsbwB6ZSVtAu2USmCc8rHHS0pWO9/p.png"} alt='Product Page' />
                        </Grid>
                        <Grid style={{ marginTop: "40px" }} item xs={12} sm={0} md={14}>
                            <img height={300} width={600} className='project-img' src={"https://previews.dropbox.com/p/thumb/AB96AT5dMivAeCmUcGM4R5fKiMEwQ3flkB8MLt934ZDeVI90uuLgLaA1R0cxIoT0irPbye1wgmSxao0QnvB_bam6dgypFyfQQZQFmkGrQrJb5ZlHbsRhY-W-N4L9ocQpONgs7FL137KLgsTdW520AYN7PFCwucR09R8Aq-lqqHfuCb1iOHIgeM7Dv8-FPbgMFnUpkXs4iLHzjZp9gCFZgJUHbaoZdA9PFApnZpX7Kp2r5U2GaUQxYxB74IjF64gdjBnGjlwmFJfpXXn_f3WOKBuMXN4ZasYD6pp_L0U_TIfUssq17Y495c3r8gwGDFq8H1DF9ay5yGOa0HLMQVQfSpPe/p.png"} alt='Checkout Page' />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='project'>
                <div className='project-img-section'>
                    <Grid className='project-img-grid' style={{ padding: "0 150px" }} container spacing={0}>
                        <Grid style={{ marginTop: "40px" }} item xs={12} sm={0} md={7}>
                            <img height={320} width={500} className='project-img' src={"https://previews.dropbox.com/p/thumb/AB9i0svnab8RK9x7otZRChIdsdUtpY4BtMWijAx2R8ZERBvrfjelEp2Vm4qmrbV2oPcswvcAOiv3NTpyfcGaH54buorJd9SB4Gg6EciSp5lv0SxtckDXB5AoCauSoyY-ayE6smcFOSLFWNLo8mWlwMDncEZ12BEtDw5dGAIvCuE1wPAHdijbT4NNJupqq0CBlBT4jfZ_R7dhxCubslG6CfRhobB_2edVpMjuw5kcQDKJiDA_A3O78y7UOPfIsNxF4SvLFT2UgGD8R1ellDdZVKLfdbAL8uymgrhZEh48dAwPu3cv8F-6OrNJD4xuU3J7oP28qMjQoX_ldVKVADVBLCxM/p.png"} alt='Weather' />
                        </Grid>
                    </Grid>
                </div>
                <div className='project-text'>

                    <h3 style={{ fontWeight: "800", fontSize: "25px" }}>WEATHER APP</h3>
                    {/* <h3 style={{ fontWeight: "800", fontSize: "25px" }}>Every Project is a unique piece of Development</h3> */}
                    <p className='hero-text' style={{ fontWeight: "500", color: "gray" }}>

                        React Weather App, a web-based platform developed using React and API integration. Get real-time weather updates for your current location and search for cities worldwide. Experience accurate data, intuitive design, customizable preferences, forecasts.
                    </p>
                    <a href='https://github.com/sidrupwate/My-Weather-App.git' className='social'><GitHub style={{ fontSize: "35px" }} /><span style={{ fontWeight: "800", margin: "0 5px" }}>Code</span></a>
                </div>
            </div>
        </>
    );
}

export default Project;
