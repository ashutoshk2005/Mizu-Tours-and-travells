import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="text-center mb-4">
          <img src={logo} alt="MIZU" className="auth-logo" />
          <h3 className="fw-800 mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Welcome Back</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '0.92rem'}}>Log in to manage your bookings</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <div className="position-relative">
              <i className="bi bi-envelope position-absolute" style={{top: '50%', transform: 'translateY(-50%)', left: '14px', color: 'var(--text-muted)'}}></i>
              <input
                type="email"
                className="form-control"
                style={{paddingLeft: '2.5rem'}}
                placeholder="you@email.com"
                required
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="position-relative">
              <i className="bi bi-lock position-absolute" style={{top: '50%', transform: 'translateY(-50%)', left: '14px', color: 'var(--text-muted)'}}></i>
              <input
                type={show ? 'text' : 'password'}
                className="form-control"
                style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}
                placeholder="Your password"
                required
                value={form.password}
                onChange={e => setForm({...form, password: e.target.value})}
              />
              <button type="button" className="position-absolute border-0 bg-transparent"
                style={{top: '50%', transform: 'translateY(-50%)', right: '14px', color: 'var(--text-muted)', cursor: 'pointer'}}
                onClick={() => setShow(!show)}>
                <i className={`bi ${show ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember"
                checked={form.remember} onChange={e => setForm({...form, remember: e.target.checked})}
                style={{accentColor: 'var(--mizu-orange)'}} />
              <label className="form-check-label" htmlFor="remember" style={{fontSize: '0.88rem', fontWeight: '600'}}>Remember me</label>
            </div>
            <a href="#!" style={{color: 'var(--mizu-orange)', fontSize: '0.88rem', fontWeight: '700', textDecoration: 'none'}}>Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-submit w-100 mb-3" disabled={loading}>
            {loading ? (
              <><span className="spinner-border spinner-border-sm me-2"></span>Logging in...</>
            ) : (
              <><i className="bi bi-box-arrow-in-right me-2"></i>Login</>
            )}
          </button>
        </form>

        <div className="position-relative text-center my-3">
          <hr />
          <span className="position-absolute bg-white px-3" style={{top: '-10px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-muted)', fontSize: '0.82rem'}}>or</span>
        </div>

        <button className="btn w-100 mb-3 fw-700" style={{border: '2px solid #f0f0f0', borderRadius: '12px', fontSize: '0.92rem', padding: '0.75rem'}}>
          <i className="bi bi-google me-2" style={{color: '#EA4335'}}></i>Continue with Google
        </button>

        <p className="text-center mb-0" style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>
          New to MIZU? <Link to="/signup" style={{color: 'var(--mizu-orange)', fontWeight: '700', textDecoration: 'none'}}>Create Account</Link>
        </p>
      </div>
    </div>
  );
}
