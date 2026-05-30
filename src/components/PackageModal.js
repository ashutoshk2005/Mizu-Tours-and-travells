import { useState } from 'react';

export default function PackageModal({ pkg, onClose }) {
  const [form, setForm] = useState({ name: '', age: '', phone: '', email: '', destination: pkg?.name || '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!pkg) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2000);
  };

  return (
    <div className="modal fade show d-block" style={{background: 'rgba(0,0,0,0.6)', zIndex: 2000}} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{pkg.name}</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body p-0">
            <img src={pkg.image} alt={pkg.name} className="w-100" style={{height: '260px', objectFit: 'cover'}} />
            <div className="p-4">
              {/* Package Info */}
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="p-3 rounded-3" style={{background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.15)'}}>
                    <div className="small fw-700 mb-1" style={{color: 'var(--text-muted)'}}>PRICE PER ADULT</div>
                    <div className="price-tag">{pkg.price}</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded-3" style={{background: 'rgba(26,78,216,0.06)', border: '1px solid rgba(26,78,216,0.15)'}}>
                    <div className="small fw-700 mb-1" style={{color: 'var(--text-muted)'}}>DURATION</div>
                    <div className="fw-800" style={{color: 'var(--mizu-blue)', fontSize: '1.1rem'}}>{pkg.duration}</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded-3" style={{background: 'rgba(108,43,217,0.06)', border: '1px solid rgba(108,43,217,0.15)'}}>
                    <div className="small fw-700 mb-1" style={{color: 'var(--text-muted)'}}>RATING</div>
                    <div className="fw-800" style={{color: 'var(--mizu-purple)', fontSize: '1.1rem'}}>
                      <span className="stars">{'★'.repeat(Math.floor(pkg.rating))}</span> {pkg.rating} ({pkg.reviews})
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="fw-800 mb-2">About This Tour</h6>
              <p style={{color: 'var(--text-muted)', lineHeight: '1.7'}} className="mb-4">{pkg.description}</p>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <h6 className="fw-800 mb-2"><i className="bi bi-building me-2" style={{color: 'var(--mizu-orange)'}}></i>Hotel</h6>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.92rem'}}>{pkg.hotel}</p>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-800 mb-2"><i className="bi bi-bus-front me-2" style={{color: 'var(--mizu-blue)'}}></i>Transport</h6>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.92rem'}}>{pkg.transport}</p>
                </div>
              </div>

              <h6 className="fw-800 mb-2">Package Inclusions</h6>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {pkg.inclusions.map((inc, i) => (
                  <span key={i} className="inclusion-tag"><i className="bi bi-check-circle-fill me-1"></i>{inc}</span>
                ))}
              </div>

              {/* Enquiry Form */}
              <div className="p-4 rounded-3" style={{background: '#f9f9ff', border: '1px solid rgba(26,78,216,0.1)'}}>
                <h6 className="fw-800 mb-3" style={{color: 'var(--mizu-blue)'}}>
                  <i className="bi bi-send-fill me-2"></i>Send Enquiry
                </h6>
                {submitted ? (
                  <div className="alert alert-success text-center fw-700">
                    <i className="bi bi-check-circle-fill me-2"></i>Enquiry sent! We'll contact you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name *</label>
                        <input type="text" className="form-control" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" value={form.age} onChange={e => setForm({...form, age: e.target.value})} placeholder="Your age" min="1" max="99" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone Number *</label>
                        <input type="tel" className="form-control" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@email.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Destination</label>
                        <input type="text" className="form-control" value={form.destination} onChange={e => setForm({...form, destination: e.target.value})} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Travel Date *</label>
                        <input type="date" className="form-control" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} min={new Date().toISOString().split('T')[0]} />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Any special requirements or questions..."></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-submit w-100">
                          <i className="bi bi-send me-2"></i>Send Enquiry
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
