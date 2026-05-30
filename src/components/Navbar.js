import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { indianStates } from '../data/states';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [stateModal, setStateModal] = useState(null);
  const navigate = useNavigate();

  const handleStateClick = (state) => {
    setStateModal(state);
    // Close dropdown
    document.body.click();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg mizu-navbar">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="MIZU Travels" style={{ width: '70px', height: 'auto' }} />
          </Link>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mx-auto gap-1">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link p-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  style={{ textDecoration: 'none' }}
                >
                  India
                </button>
                <div className="dropdown-menu" style={{ columns: '2', columnGap: '0.5rem', minWidth: '360px' }}>
                  {indianStates.map(state => (
                    <button
                      key={state.id}
                      className="dropdown-item"
                      onClick={() => handleStateClick(state)}
                    >
                      <i className="bi bi-geo-alt-fill me-2" style={{ color: 'var(--mizu-orange)' }}></i>
                      {state.name}
                    </button>
                  ))}
                </div>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>

            <div className="d-flex gap-2 align-items-center">
              <NavLink to="/login" className="nav-link btn-nav-login">Login</NavLink>
              <NavLink to="/signup" className="nav-link btn-nav-signup">Sign Up</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* State Modal */}
      {stateModal && (
        <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  {stateModal.name}
                </h5>
                <button className="btn-close btn-close-white" onClick={() => setStateModal(null)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="mb-3">
                  <img src={stateModal.image} alt={stateModal.name} className="w-100 rounded-3" style={{ height: '180px', objectFit: 'cover' }} />
                </div>
                <p className="fw-600 mb-3" style={{ color: 'var(--text-muted)' }}>Top destinations in {stateModal.name}:</p>
                <div>
                  {stateModal.destinations.map((dest, i) => (
                    <button
                      key={i}
                      className="state-dest-tag"
                      onClick={() => { setStateModal(null); navigate('/'); }}
                    >
                      <i className="bi bi-compass me-1"></i>{dest}
                    </button>
                  ))}
                </div>
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-submit w-100" onClick={() => setStateModal(null)}>
                  Explore Packages for {stateModal.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
