import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert("Passwords don't match!");
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-card text-center">
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}></div>
          <h3 className="fw-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Welcome to MIZU!</h3>
          <p style={{color: 'var(--text-muted)', marginBottom: '2rem'}}>Your account has been created. Ready to dive into happiness?</p>
          <Link to="/" className="btn btn-submit">Start Exploring</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card" style={{maxWidth: '500px'}}>
        <div className="text-center mb-4">
          <img src={logo} alt="MIZU" className="auth-logo" />
          <h3 className="fw-800 mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Create Account</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '0.92rem'}}>Join 50,000+ happy travelers</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Your full name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className="col-12">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="you@email.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="col-12">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <div className="position-relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={e => setForm({...form, password: e.target.value})}
                  style={{paddingRight: '2.5rem'}}
                />
                <button type="button" className="position-absolute border-0 bg-transparent"
                  style={{top: '50%', transform: 'translateY(-50%)', right: '12px', color: 'var(--text-muted)', cursor: 'pointer'}}
                  onClick={() => setShowPass(!showPass)}>
                  <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Repeat password"
                required
                value={form.confirm}
                onChange={e => setForm({...form, confirm: e.target.value})}
                style={{borderColor: form.confirm && form.confirm !== form.password ? '#ef4444' : ''}}
              />
            </div>
            {form.confirm && form.confirm !== form.password && (
              <div className="col-12">
                <small style={{color: '#ef4444', fontWeight: '600'}}>Passwords do not match</small>
              </div>
            )}
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="terms" required style={{accentColor: 'var(--mizu-orange)'}} />
                <label className="form-check-label" htmlFor="terms" style={{fontSize: '0.85rem', fontWeight: '600'}}>
                  I agree to the <a href="#!" style={{color: 'var(--mizu-orange)', textDecoration: 'none'}}>Terms & Conditions</a> and <a href="#!" style={{color: 'var(--mizu-orange)', textDecoration: 'none'}}>Privacy Policy</a>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-submit w-100" disabled={loading}>
                {loading ? (
                  <><span className="spinner-border spinner-border-sm me-2"></span>Creating Account...</>
                ) : (
                  <><i className="bi bi-person-plus-fill me-2"></i>Create Account</>
                )}
              </button>
            </div>
          </div>
        </form>

        <p className="text-center mt-3 mb-0" style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>
          Already have an account? <Link to="/login" style={{color: 'var(--mizu-orange)', fontWeight: '700', textDecoration: 'none'}}>Log In</Link>
        </p>
      </div>
    </div>
  );
}
