import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiExternalLink, FiGithub, FiArrowRight, FiSearch,
  FiCode, FiCpu, FiLayout, FiDatabase, FiSmartphone, FiBook,
  FiLayers, FiStar
} from 'react-icons/fi';
import { projectsData, projectCategories } from '../data/projectsData';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'fullstack', label: 'Full Stack', icon: <FiCode /> },
    { id: 'aiml', label: 'AI/ML', icon: <FiCpu /> },
    { id: 'frontend', label: 'Frontend', icon: <FiLayout /> },
    { id: 'backend', label: 'Backend', icon: <FiDatabase /> },
    { id: 'mobile', label: 'Mobile', icon: <FiSmartphone /> },
    { id: 'academic', label: 'Academic', icon: <FiBook /> }
  ];

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat?.icon || <FiCode />;
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat?.label || category;
  };

  useEffect(() => {
    // Simulate loading for effect
    setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    filterProjects();
  }, [activeCategory, searchQuery, projects]);

  const filterProjects = () => {
    let filtered = [...projects];

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.technologies?.some(t => t.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);
  };

  const displayProjects = filteredProjects;

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="page-hero-dark">
        <div className="hero-grid-bg"></div>
        <div className="hero-stars">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`star star-${i + 1}`}></div>
          ))}
        </div>
        <div className="container">
          <span className="page-badge">
            <FiLayers /> Our Work
          </span>
          <h1>Project <span className="text-gradient">Portfolio</span></h1>
          <p className="page-subtitle">
            Explore our collection of real, working projects built for students and businesses.
            Each project is 100% functional and production-ready.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="projects-filters">
        <div className="container">
          <div className="filters-wrapper">
            {/* Search */}
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section section-dark">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading projects...</p>
            </div>
          ) : displayProjects.length === 0 ? (
            <div className="empty-state">
              <p>No projects found matching your criteria.</p>
              <button
                className="btn btn-secondary"
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {displayProjects.map((project) => (
                <article key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                  {project.featured && <span className="featured-badge"><FiStar /> Featured</span>}

                  <div className="project-image">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} />
                    ) : (
                      <div className="project-placeholder">
                        {getCategoryIcon(project.category)}
                      </div>
                    )}
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                            <FiExternalLink />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Code">
                            <FiGithub />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-category">
                      {getCategoryIcon(project.category)}
                      <span>{getCategoryLabel(project.category)}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>

                    <div className="project-technologies">
                      {project.technologies?.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="tech-tag more">+{project.technologies.length - 4}</span>
                      )}
                    </div>

                    <Link to={`/projects/${project.slug}`} className="project-link">
                      View Details <FiArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Technologies Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Have a Project Idea?
            </h2>
            <p className="cta-description">
              Let's discuss your requirements and build something amazing together.
              We'll bring your vision to life with clean, working code.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <FiArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
