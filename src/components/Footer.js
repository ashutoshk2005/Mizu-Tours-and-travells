import { Link } from 'react-router-dom';
import { contactInfo, socialLinks } from '../data/contact';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="mizu-footer">
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-brand">
              <img src={logo} alt="MIZU Travels" />
              <p className="mt-2" style={{fontSize: '0.88rem', lineHeight: '1.7'}}>
                MIZU Travels — Dive Into Happiness. We craft unforgettable travel experiences across India and beyond.
              </p>
              <div className="mt-3">
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-facebook"></i></a>
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-instagram"></i></a>
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-twitter-x"></i></a>
                <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="footer-title">Quick Links</h6>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/terms-conditions" className="footer-link">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">Our Services</h6>
            <button className="footer-link btn btn-link p-0" type="button" style={{textAlign: 'left'}}>Honeymoon Packages</button>
            <button className="footer-link btn btn-link p-0" type="button" style={{textAlign: 'left'}}>India Tour Packages</button>
            <button className="footer-link btn btn-link p-0" type="button" style={{textAlign: 'left'}}>Family Tours</button>
            <button className="footer-link btn btn-link p-0" type="button" style={{textAlign: 'left'}}>Adventure Trips</button>
            <button className="footer-link btn btn-link p-0" type="button" style={{textAlign: 'left'}}>Hill Station Tours</button>
            <button className="footer-link btn btn-link p-0" type="button" style={{textAlign: 'left'}}>International Tours</button>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-title">Contact Us</h6>
            <div className="d-flex gap-3 mb-3 align-items-start">
              <i className="bi bi-geo-alt-fill mt-1" style={{color: 'var(--mizu-orange)'}}></i>
              <span style={{fontSize: '0.88rem'}}>{contactInfo.address}</span>
            </div>
            <div className="d-flex gap-3 mb-2 align-items-center">
              <i className="bi bi-telephone-fill" style={{color: 'var(--mizu-orange)'}}></i>
              <a href={`tel:${contactInfo.phone}`} className="footer-link mb-0">{contactInfo.phone}</a>
            </div>
            <div className="d-flex gap-3 mb-3 align-items-center">
              <i className="bi bi-envelope-fill" style={{color: 'var(--mizu-orange)'}}></i>
              <a href={`mailto:${contactInfo.email}`} className="footer-link mb-0">{contactInfo.email}</a>
            </div>

            {/* Newsletter */}
            <div className="mt-3">
              <p className="fw-700 mb-2" style={{color: '#fff', fontSize: '0.88rem'}}>Stay in the loop!</p>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" style={{borderRadius: '10px 0 0 10px', fontSize: '0.85rem'}} />
                <button className="btn" style={{background: 'var(--gradient-main)', color: '#fff', borderRadius: '0 10px 10px 0', fontWeight: '700', fontSize: '0.85rem'}}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0" style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)'}}>
            © 2026 MIZU Travels. All rights reserved.
          </p>
          <p className="mb-0" style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)'}}>
            Made with <span style={{color: 'var(--mizu-pink)'}}>♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
