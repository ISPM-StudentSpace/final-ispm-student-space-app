import React from 'react';
import '../assets/css/header.css';
import logo from "../assets/img/iss.png";

function Header() {
  return (
    <>
        <header className="header">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-xl-6 order-2 order-lg-1">
                        <div className="text-container">
                            <h1>  <span>i</span>nstitue <span>s</span>upérieur <span>p</span>olytechnique de <span>m</span>adagascar</h1>
                            <p>Fahaizana - Fampandrosoana - Fihavanana</p>
                            <a className="btn" href="#services">About ISPM</a>
                            <a className="btn" href="#services">Registration</a>
                        </div> 
                    </div>
                    <div className="col-lg-6 col-xl-6 order-1 order-lg-2">
                        <div className="image-container">
                            <img className="img-fluid" src={logo} alt="logo ISPM" />
                        </div> 
                    </div>
                </div> 
            </div> 
        </header> 
        
    </>
  )
}

export default Header