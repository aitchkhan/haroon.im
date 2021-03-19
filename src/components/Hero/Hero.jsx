import React, { useContext, useState, useEffect } from 'react';
import { Container , Row , Navbar ,Nav ,NavDropdown ,NavItem,NavLink} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import '../Hero/h_style.css';
import '../css/custom.css';
import '../css/style.default.css';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div>
        <section id="hero" className="intro">       
          <div className="overlay" />
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-lg-8 col-md-12 mx-auto">
                  <p className="italic">Oh, hello, nice to meet you!</p>
                  <h1>I'm Haroon Khan</h1>
                  <p className="italic">&amp; I'm Software Engineer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* intro end*/}
        {/* navbar*/}
      </div>
  );
};

export default Header;
