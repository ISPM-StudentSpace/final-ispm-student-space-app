import React from 'react';
import '../assets/css/aside.css';
import {FaCalendar} from 'react-icons/fa/index';
import { Carousel } from 'react-bootstrap';
import ispm1 from '../assets/img/ispm1.jpg';
import ispm2 from '../assets/img/ispm2.jpg';
import ispm4 from '../assets/img/ispm4.jpg';
import ispm7 from '../assets/img/ispm7.jpg';
import ispm14 from '../assets/img/ispm14.jpg';
import ispm9 from '../assets/img/ispm9.jpg';

function Aside() {
  return (
    <div className='Aside'>
        <div className='aside-section'>
          <p>
            ISPM won the first awards of the Olympiad in Informatics of Madagascar in 2012 for his first participation. 
          </p>
          <hr />
          <p>
          According to the Shanghai ranking of Universities, ISPM is ranked among the top ten universities of Madagascar (among the 140 public and private universities). 
          </p>
        </div>

        <div className='aside-section'>

          <h4 className='aside-title'>News</h4>

          <a href="#"><h5>Examens semestriels</h5></a>
          <p>
            Début des examens semestriels (1ère, 2e et 3e année) : jeudi 26 mars 2020. <br />
            Bonne fête de Pâques tout le monde !
          </p>
          <span><FaCalendar/>  24 Mar 2022</span>
          <hr />
          <a href="#"><h5>Examens semestriels</h5></a>
          <p>
            Début des examens semestriels (1ère, 2e et 3e année) : jeudi 26 mars 2020. <br />
            Bonne fête de Pâques tout le monde !
          </p>
          <span><FaCalendar/>  24 Mar 2022</span>
        </div>

        <div className='carousel-section'>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ispm1}
                alt="ispm1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ispm2}
                alt="ispm2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ispm4}
                alt="ispm4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ispm7}
                alt="ispm7"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ispm9}
                alt="ispm9"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ispm14}
                alt="ispm14"
              />
            </Carousel.Item>
            
          </Carousel>
        </div>
        
    </div>
  )
}

export default Aside