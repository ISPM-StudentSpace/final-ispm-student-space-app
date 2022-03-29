import React from 'react';
import '../assets/css/home.css';
import Aside from '../parts/Aside';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import recteur from "../assets/img/recteur.jpg";

function Home():JSX.Element {
    return (
        <div className="Home">

            <Header/>
            
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'><Aside/></div>
                        <div className='col-lg-8'>
                            <div className='section-content'>
                                <div className='section-title'>
                                    <h2>Words from rector</h2>
                                </div>
                                <div className='section-body'>
                                    <div className='row'>
                                        <div className='col-lg-8 order-2 order-lg-1'>
                                            <p>
                                                A website has become a means of communication that is both modern and rational. Through this website, ISPM is intended to provide most of its history and especially its activities. As any university, its activities are above all educational, but also regarding the researches. 
                                            </p>
                                            <p>
                                                We hope that through this website, you will appreciate more our goals that are oriented towards excellence. Indeed, we have always put as priority the excellence in the training of our young people who take place increasingly important positions in all sectors such as the economy, industry, government, education and research. 
                                            </p>
                                        </div>
                                        <div className='col-lg-4 order-1 order-lg-2'>
                                            <div className='img-rect'>
                                                <img src={recteur} alt="recteur" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <p>
                                                We invite companies which have job offers and which are interested to the ISPM students to send them to the email address: ispm.mada@gmail.com. Thanks for your collaboration. 
                                            </p>
                                            <p>
                                                Dear surfers, ISPM hope you will spend a best moment during surfing this website and for any positive and constructive suggestion, you are always welcome. 
                                            </p>
                                            <p>
                                                Thank you.
                                            </p>
                                            <b>Pr. Julien Amédée RABOANARY </b>
                                        </div> 
                                    </div>
                                </div>
                            </div>


                            
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    );
}

export default Home;