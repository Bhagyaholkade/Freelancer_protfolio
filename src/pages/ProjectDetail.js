import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FiArrowLeft, FiExternalLink, FiGithub, FiCode, FiCpu,
  FiLayout, FiDatabase, FiSmartphone, FiBook, FiArrowRight
} from 'react-icons/fi';
import { getProjectBySlug } from '../data/projectsData';

const categoryIcons = {
  fullstack: <FiCode />,
  aiml: <FiCpu />,
  frontend: <FiLayout />,
  backend: <FiDatabase />,
  mobile: <FiSmartphone />,
  academic: <FiBook />,
};

const categoryLabels = {
  fullstack: 'Full Stack',
  aiml: 'AI / ML',
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  academic: 'Academic',
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="not-found-page">
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="btn btn-secondary">
          <FiArrowLeft style={{ marginRight: '8px' }} /> Back to Projects
        </Link>
      </div>
    );
  }

  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#';

  return (
    <div className="project-detail-page">
      {/* Hero */}
      <section className="page-hero-dark">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <Link to="/projects" className="back-link">
            <FiArrowLeft /> Back to Projects
          </Link>

          <div className="project-detail-hero">
            <span className="page-badge">
              {categoryIcons[project.category]}
              {categoryLabels[project.category] || project.category}
            </span>

            <h1>{project.title}</h1>
            <p className="page-subtitle">{project.shortDescription}</p>

            <div className="project-detail-actions">
              {hasLiveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Live Demo <FiExternalLink />
                </a>
              ) : (
                <span className="btn btn-primary btn-lg btn-disabled" title="Demo coming soon">
                  Live Demo (Coming Soon)
                </span>
              )}
              {hasGithubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  View Code <FiGithub />
                </a>
              ) : (
                <span className="btn btn-secondary btn-lg btn-disabled" title="Code is private">
                  Code (Private)
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="section section-dark">
        <div className="container">
          <div className="project-detail-grid">
            {/* Main content */}
            <div className="project-detail-content">
              {project.imageUrl && (
                <div className="project-detail-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
              )}

              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                About This Project
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>{project.description}</p>
            </div>

            {/* Sidebar */}
            <aside className="project-detail-sidebar">
              <div className="project-meta-card">
                <h4>Technologies Used</h4>
                <div className="project-technologies" style={{ marginTop: '1rem' }}>
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-meta-card">
                <h4>Project Status</h4>
                <span className={`status-badge ${project.status}`}>
                  {project.status === 'completed' ? '✅ Completed' : '🔄 In Progress'}
                </span>
              </div>

              <div className="project-meta-card" style={{ background: 'rgba(255,77,77,0.05)', borderColor: 'rgba(255,77,77,0.2)' }}>
                <h4>Want something similar?</h4>
                <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1rem' }}>
                  We can build a custom version tailored to your business needs.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get a Free Quote <FiArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
