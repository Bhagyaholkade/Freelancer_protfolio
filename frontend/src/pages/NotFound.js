import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFound = () => {
    return (
        <div className="section section-dark" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>404</h1>
                <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Page Not Found</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="btn btn-primary">
                    <FiHome className="btn-icon" style={{ marginRight: '0.5rem' }} /> Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
