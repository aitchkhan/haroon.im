import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../../images/haroon.png';
import PortfolioContext from '../../context/context';
import '../css/custom.css';
import '../css/style.default.css';

const Services = ()=>{
    return(
        <section id="services" style={{backgroundColor: '#eee'}}>
        <div className="container">
          <div className="row services">
            <div className="col-lg-12">
              <h2 className="heading2">Services</h2>
              <div className="row serve">
                <div className="col-md-4">
                  <div className="box">
                    <div className="icon"><i className="fa fa-desktop" /></div>
                    <h5>Web Development</h5>
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="icon"><i class="fa fa-mobile"></i></div>
                    <h5>Native Applications</h5>
                    <p>Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="icon"><i className="fa fa-globe" /></div>
                    <h5>SEO and SEM</h5>
                    <p>Am terminated it excellence invitation projection as. She graceful shy. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;