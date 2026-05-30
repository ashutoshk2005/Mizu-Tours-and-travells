export default function DestCard({ pkg, onViewDetails }) {
  return (
    <div className="dest-card card h-100">
      <div className="card-img-wrap">
        <img src={pkg.image} alt={pkg.name} className="card-img-top" />
        {pkg.badge && <span className="card-badge">{pkg.badge}</span>}
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{pkg.name}</h5>
          <span className="duration-tag ms-2 flex-shrink-0">{pkg.duration}</span>
        </div>
        {/* Removed star rating, review count, description, and inclusions as requested */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600'}}>Starting from</div>
            <div className="price-tag">{pkg.price}</div>
            <div style={{fontSize: '0.72rem', color: 'var(--text-muted)'}}>per adult</div>
          </div>
          <button className="btn btn-view-details" style={{width: 'auto'}} onClick={() => onViewDetails(pkg)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
