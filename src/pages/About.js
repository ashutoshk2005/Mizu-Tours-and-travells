export default function About() {
  const team = [
    { name: 'Priya Sharma', role: 'Founder & CEO', exp: '18+ Years', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
    { name: 'Rahul Verma', role: 'Head of Tours', exp: '12+ Years', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { name: 'Ananya Gupta', role: 'Travel Designer', exp: '8+ Years', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
    { name: 'Vikram Singh', role: 'Adventure Expert', exp: '15+ Years', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-badge">About MIZU Travels</span>
              <h1 className="hero-title" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
                Dive Into Happiness
              </h1>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem'}}>
                MIZU Travels was born from a simple belief — that travel should transform you. For 15+ years, we've been crafting extraordinary journeys across India, connecting travelers with the soul of each destination.
              </p>
              <a href="/contact" className="btn-hero">Get In Touch</a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  { label: 'Happy Travelers', val: '1,000+' },
                  { label: 'Destinations', val: '200+' },
                  { label: 'Years Experience', val: '15+' },
                  { label: 'Expert Guides', val: '80+' },
                ].map((s, i) => (
                  <div className="col-6" key={i}>
                    <div className="p-4 rounded-4 text-center" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)'}}>
                      <div style={{fontSize: '2rem', fontWeight: '800', background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{s.val}</div>
                      <div style={{color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', fontWeight: '600'}}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5" style={{background: '#fafafa'}}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded-4 h-100" style={{background: 'linear-gradient(135deg, rgba(255,107,53,0.06), rgba(255,78,138,0.06))', border: '2px solid rgba(255,107,53,0.1)'}}>
                <div className="mb-3" style={{fontSize: '2.5rem'}}>🎯</div>
                <h4 className="fw-800 mb-3">Our Mission</h4>
                <p style={{color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: 0}}>
                  To make travel accessible, affordable, and unforgettable for every Indian traveler. We connect people with India's incredible diversity through expertly curated experiences.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-4 h-100" style={{background: 'linear-gradient(135deg, rgba(26,78,216,0.06), rgba(108,43,217,0.06))', border: '2px solid rgba(26,78,216,0.1)'}}>
                <div className="mb-3" style={{fontSize: '2.5rem'}}>🌟</div>
                <h4 className="fw-800 mb-3">Our Vision</h4>
                <p style={{color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: 0}}>
                  To become India's most trusted travel brand — one that every traveler turns to for authentic, transformative journeys that create lifelong memories.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-4 h-100" style={{background: 'linear-gradient(135deg, rgba(0,180,216,0.06), rgba(26,78,216,0.06))', border: '2px solid rgba(0,180,216,0.1)'}}>
                <div className="mb-3" style={{fontSize: '2.5rem'}}>💎</div>
                <h4 className="fw-800 mb-3">Our Values</h4>
                <p style={{color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: 0}}>
                  Trust, authenticity, sustainability, and joy. We believe travel should enrich not just the traveler, but the communities and destinations visited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">The MIZU Difference</h2>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700" alt="Travel" className="w-100 rounded-4" style={{height: '400px', objectFit: 'cover'}} />
            </div>
            <div className="col-lg-6">
              {[
                { icon: '✈', title: 'Expertly Crafted Itineraries', desc: 'Each trip is designed by travel experts with deep local knowledge and attention to detail.' },
                { icon: '🏨', title: 'Handpicked Accommodations', desc: 'Only the best hotels, resorts, and homestays that match our quality standards.' },
                { icon: '👥', title: 'Personal Travel Manager', desc: 'Dedicated support from booking to return. Your personal travel buddy throughout.' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'What you see is what you pay. Zero hidden charges, zero surprises.' },
              ].map((item, i) => (
                <div className="d-flex gap-3 mb-4" key={i}>
                  <div className="flex-shrink-0" style={{fontSize: '1.8rem', width: '48px', textAlign: 'center'}}>{item.icon}</div>
                  <div>
                    <h6 className="fw-800 mb-1">{item.title}</h6>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0, lineHeight: '1.7'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-5" style={{background: '#fafafa'}}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Our People</span>
            <h2 className="section-title">Meet The Team</h2>
            <p className="section-subtitle">Passionate travelers who live to make your journey extraordinary</p>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((member, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="team-card">
                  <img src={member.img} alt={member.name} className="team-img" />
                  <h5 className="fw-800 mb-1">{member.name}</h5>
                  <p style={{color: 'var(--mizu-orange)', fontWeight: '700', fontSize: '0.88rem', marginBottom: '0.25rem'}}>{member.role}</p>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 0}}>Experience: {member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
