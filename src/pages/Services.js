import { useState } from 'react';
import { services } from '../data/packages';

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container text-center">
          <span className="hero-badge">What We Offer</span>
          <h1 className="hero-title" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>Our Services</h1>
          <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto'}}>
            From dreamy honeymoons to adrenaline-fueled adventures — we have a journey for every soul.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5" style={{background: '#fafafa'}}>
        <div className="container">
          <div className="row g-4">
            {services.map(svc => (
              <div className="col-lg-4 col-md-6" key={svc.id}>
                <div
                  className="service-card card h-100"
                  onMouseEnter={() => setHovered(svc.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{overflow: 'hidden', position: 'relative'}}>
                    <img src={svc.image} alt={svc.title} className="card-img-top" />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(to top, ${svc.color}cc, transparent)`,
                      opacity: hovered === svc.id ? 1 : 0,
                      transition: 'opacity 0.4s ease'
                    }}></div>
                  </div>
                  <div className="card-body p-4">
                    <div className="service-icon mb-3" style={{background: `linear-gradient(135deg, ${svc.color}, ${svc.color}99)`}}>
                      <i className={`bi ${svc.icon}`}></i>
                    </div>
                    <h5 className="fw-800 mb-2">{svc.title}</h5>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>{svc.description}</p>
                    <button
                      className="btn btn-view-details"
                      style={{background: `linear-gradient(135deg, ${svc.color}, ${svc.color}cc)`}}
                    >
                      View Details <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Custom Package Card */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 rounded-4 d-flex flex-column align-items-center justify-content-center text-center p-5"
                style={{background: 'linear-gradient(135deg, #0a0a1a, #1a1a4e)', minHeight: '320px'}}>
                
                <h5 className="fw-800 text-white mb-3">Custom Package</h5>
                <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
                  Want something unique? Tell us your dream trip and we'll craft a perfect itinerary just for you.
                </p>
                <a href="/contact" className="btn btn-submit">Build My Trip</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Why MIZU</span>
            <h2 className="section-title">We Make Travel Effortless</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-shield-check-fill', title: 'Trusted & Secure', desc: 'Over 50,000 happy travelers trust MIZU. Your safety and satisfaction is our top priority.', color: '#1A4ED8' },
              { icon: 'bi-currency-rupee', title: 'Best Price Guarantee', desc: 'We match and beat any comparable price. Get the best value with no hidden charges.', color: '#FF6B35' },
              { icon: 'bi-headset', title: '24/7 Support', desc: 'Round-the-clock travel assistance. We are always there whenever you need us.', color: '#6C2BD9' },
              { icon: 'bi-star-fill', title: 'Premium Experience', desc: 'Hand-curated packages with luxury hotels, expert guides, and seamless transfers.', color: '#FF4E8A' },
            ].map((item, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="text-center p-4 rounded-4 h-100"
                  style={{border: `2px solid ${item.color}22`, transition: 'all 0.3s'}}
                  onMouseEnter={e => e.currentTarget.style.background = `${item.color}08`}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div className="mb-3" style={{
                    width: '64px', height: '64px',
                    background: `${item.color}15`,
                    borderRadius: '18px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '1.6rem', color: item.color
                  }}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h6 className="fw-800 mb-2">{item.title}</h6>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: 0}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
