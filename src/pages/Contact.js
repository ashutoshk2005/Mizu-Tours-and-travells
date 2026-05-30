import { useState } from 'react';
import { contactInfo } from '../data/contact';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container text-center">
          <span className="hero-badge">Get In Touch</span>
          <h1 className="hero-title" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>Contact Us</h1>
          <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto'}}>
            Have a question or want to plan your dream trip? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-4">
              <h3 className="fw-800 mb-4">Reach Us At</h3>
              {[
                { icon: 'bi-geo-alt-fill', title: 'Our Office', val: contactInfo.address, color: '#FF6B35' },
                { icon: 'bi-telephone-fill', title: 'Phone', val: contactInfo.phone, color: '#1A4ED8', href: `tel:${contactInfo.phone}` },
                { icon: 'bi-envelope-fill', title: 'Email', val: contactInfo.email, color: '#6C2BD9', href: `mailto:${contactInfo.email}` },
                { icon: 'bi-clock-fill', title: 'Working Hours', val: 'Mon–Sat: 9am – 7pm', color: '#FF4E8A' },
              ].map((item, i) => (
                <div className="d-flex gap-3 align-items-start mb-4" key={i}>
                  <div className="contact-icon-box" style={{background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`}}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <div className="fw-700 mb-1">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} style={{color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.92rem'}}>{item.val}</a>
                    ) : (
                      <p style={{color: 'var(--text-muted)', marginBottom: 0, fontSize: '0.92rem', lineHeight: '1.6'}}>{item.val}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-4 overflow-hidden mt-4" style={{height: '200px', background: 'linear-gradient(135deg, #e8f4fd, #cce5ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed rgba(26,78,216,0.2)'}}>
                <div className="text-center" style={{color: 'var(--mizu-blue)'}}>
                  <i className="bi bi-map-fill" style={{fontSize: '3rem', display: 'block', marginBottom: '0.5rem'}}></i>
                  <p className="fw-700 mb-0">View on Google Maps</p>
                  <small>Connaught Place, New Delhi</small>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="p-4 p-lg-5 rounded-4" style={{background: '#fafafa', border: '1px solid rgba(0,0,0,0.06)'}}>
                <h3 className="fw-800 mb-2">Send a Message</h3>
                <p style={{color: 'var(--text-muted)', marginBottom: '2rem'}}>Fill in the form and our travel expert will get back to you within 24 hours.</p>

                {submitted && (
                  <div className="alert rounded-3 fw-700 mb-4" style={{background: 'rgba(255,107,53,0.08)', border: '2px solid rgba(255,107,53,0.2)', color: 'var(--mizu-orange)'}}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Message sent! We'll contact you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Your Name *</label>
                      <input type="text" className="form-control" required placeholder="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-control" required placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Interested In</label>
                      <select className="form-select">
                        <option>Select a service</option>
                        <option>Honeymoon Package</option>
                        <option>India Tour Package</option>
                        <option>Family Tour</option>
                        <option>Adventure Trip</option>
                        <option>Hill Station Tour</option>
                        <option>Custom Package</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Your Message *</label>
                      <textarea className="form-control" rows={5} required placeholder="Tell us about your dream trip — destination, dates, group size..." value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-submit">
                        <i className="bi bi-send-fill me-2"></i>Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
