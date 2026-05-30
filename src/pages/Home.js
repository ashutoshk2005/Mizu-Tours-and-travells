import { useState, useEffect } from 'react';
import { heroSlides, summerDestinations, exploreDestinations } from '../data/packages';
import DestCard from '../components/DestCard';
import PackageModal from '../components/PackageModal';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Combined packages for search
  const allPackages = [...summerDestinations, ...exploreDestinations];

  const filteredSummer = summerDestinations.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExplore = exploreDestinations.filter(p =>
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeCategory === 'All' || p.category === activeCategory)
  );

  const categories = ['All', ...new Set(exploreDestinations.map(p => p.category))];

  return (
    <>
      {/* Hero Slider */}
      <section className="hero-section">
        {heroSlides.map((slide, i) => (
          <div key={slide.id} className={`hero-slide ${i === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.destination} />
          </div>
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div>
            <span className="hero-badge">✈ Explore India with MIZU</span>
            <h1 className="hero-title">{heroSlides[currentSlide].destination}</h1>
            <p className="hero-tagline">{heroSlides[currentSlide].tagline}</p>
            <a href="#destinations" className="btn-hero">
              <i className="bi bi-compass me-2"></i>Explore Now
            </a>
          </div>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button key={i} className={`hero-dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)}></button>
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <div className="row align-items-center g-3">
              <div className="col-12">
                <p className="fw-700 mb-2" style={{color: 'var(--text-muted)', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '1px'}}>
                  <i className="bi bi-search me-2" style={{color: 'var(--mizu-orange)'}}></i>Search Your Dream Destination
                </p>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Kashmir, Goa, Kerala, Manali..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <button className="btn btn-search w-100" onClick={() => searchTerm && document.getElementById('destinations')?.scrollIntoView({behavior: 'smooth'})}>
                  <i className="bi bi-search me-2"></i>Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-4">
            {[
              { num: '50,000+', label: 'Happy Travelers' },
              { num: '200+', label: 'Destinations' },
              { num: '15+', label: 'Years Experience' },
              { num: '98%', label: 'Satisfaction Rate' },
            ].map((s, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="stat-item">
                  <span className="stat-number">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Destinations */}
      <section className="py-5" id="destinations" style={{background: '#fafafa'}}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">☀ Summer Specials</span>
            <h2 className="section-title">Indian Destinations For Summers</h2>
            <p className="section-subtitle">Handpicked summer escapes to beat the heat and refresh your soul</p>
          </div>
          {filteredSummer.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search" style={{fontSize: '3rem', color: 'var(--text-muted)'}}></i>
              <p className="mt-3 fw-600" style={{color: 'var(--text-muted)'}}>No destinations found for "{searchTerm}"</p>
            </div>
          ) : (
            <div className="row g-4">
              {filteredSummer.map(pkg => (
                <div className="col-lg-4 col-md-6" key={pkg.id}>
                  <DestCard pkg={pkg} onViewDetails={setSelectedPkg} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Explore India */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">🗺 All Seasons</span>
            <h2 className="section-title">Explore India</h2>
            <p className="section-subtitle">From misty mountains to sun-kissed beaches — discover it all</p>
          </div>

          {/* Category Filter */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
            {categories.map(cat => (
              <button
                key={cat}
                className="btn"
                style={{
                  borderRadius: '25px',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  padding: '0.45rem 1.2rem',
                  border: '2px solid',
                  borderColor: activeCategory === cat ? 'transparent' : '#e5e7eb',
                  background: activeCategory === cat ? 'var(--gradient-main)' : 'transparent',
                  color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.3s',
                }}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredExplore.length === 0 ? (
            <div className="text-center py-5">
              <p className="fw-600" style={{color: 'var(--text-muted)'}}>No packages found</p>
            </div>
          ) : (
            <div className="row g-4">
              {filteredExplore.map(pkg => (
                <div className="col-lg-4 col-md-6" key={pkg.id}>
                  <DestCard pkg={pkg} onViewDetails={setSelectedPkg} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #0a0a1a, #1a1a4e)'}}>
        <div className="container text-center text-white">
          <h2 className="section-title mb-3" style={{color: '#fff'}}>Ready to Dive Into Happiness?</h2>
          <p className="mb-4" style={{opacity: 0.8, fontSize: '1.05rem'}}>Let our travel experts plan your perfect trip. Free consultation, no hidden charges.</p>
          <a href="/contact" className="btn-hero">
            <i className="bi bi-telephone-fill me-2"></i>Talk to an Expert
          </a>
        </div>
      </section>

      {/* Package Modal */}
      {selectedPkg && <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />}
    </>
  );
}
