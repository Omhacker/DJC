import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col">
              <div className="single-cta">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, SW 54321, Chandigarh</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="single-cta">
                <FontAwesomeIcon icon={faPhone} />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="single-cta">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://i.ibb.co/QDy827D/ak-logo.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} className="facebook-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} className="twitter-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faGooglePlusG} className="google-bg" /></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Expert Team</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Latest News</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><FontAwesomeIcon icon={faTelegramPlane} /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="footer-container">
          <div className="row">
            <div className="col">
              <div className="copyright-text">
                <p>Copyright &copy; 2024, All Right Reserved DJC</p>
              </div>
            </div>
            <div className="col">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
