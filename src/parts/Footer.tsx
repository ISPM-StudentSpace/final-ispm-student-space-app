import React from 'react';
import '../assets/css/footer.css';
import logo from "../assets/img/logoIspm.png";
import {FaHome, FaMapMarkerAlt, FaEnvelope, FaPhone} from 'react-icons/fa/index';
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi/index';

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-5 mb-4">
                        <div id='footer-logo' className='d-flex align-items-center'>
                            <img src={logo} className='me-2'/><h6 className="text-uppercase font-weight-bold m-0">ISPM</h6>
                        </div>
                        <hr/>
                        <h4>
                            <span>I</span>NSTITUT <span>S</span>UPERIEUR <span>P</span>OLYTECHNIQUE DE <span>M</span>ADAGASCAR
                        </h4>
                        <a className="btn" href="#services">ISPM BLOG</a>
                    </div>
                    
                    <div className="col-md-3 col-lg-3 mb-4" id="liens">
                        <h6 className="text-uppercase font-weight-bold">Links</h6>
                        <hr/>
                        <p><a href="#"><BiChevronRight/> Home</a></p>
                        <p><a href="#"><BiChevronRight/> Presentation</a></p>
                        <p><a href="#"><BiChevronRight/> News & Events</a></p>
                        <p><a href="#"><BiChevronRight/> Researches</a></p>
                    </div>

                    <div className="col-md-4 col-lg-4" id='footer-contact'>
                        <h6 className="text-uppercase">contact</h6>
                        <hr/>
                        <p><FaHome className='me-2'/> Ambatomaro Antsobolo</p>
                        <p><FaMapMarkerAlt className='me-2'/> Antananarivo MADAGASCAR</p>
                        <p><FaEnvelope className='me-2'/> ispm.mada@gmail.com</p>
                        <p><FaPhone className='me-2'/> + 261 33 12 171 60</p>
                        <p><FaPhone className='me-2'/> + 261 34 20 874 28</p>
                        <p><FaPhone className='me-2'/> + 261 32 02 544 72</p>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="copyright-text">
                                © 2022 Copyright : <a href="#">ispm-edu.com</a>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer