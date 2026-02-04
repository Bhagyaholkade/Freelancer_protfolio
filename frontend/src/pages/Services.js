import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiCode, FiCpu, FiBook, FiLayout, FiDatabase, FiSmartphone,
  FiArrowRight, FiCheck, FiZap, FiShield, FiStar
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: 'Full Stack Web Development',
      description: 'Complete web applications with modern frontend frameworks and robust backend systems.',
      features: [
        'React / Next.js Frontend',
        'Node.js / Express Backend',
        'PostgreSQL / MongoDB Database',
        'REST API Development',
        'Authentication & Authorization',
        'Deployment & Hosting'
      ],
      popular: true
    },
    {
      icon: <FiCpu />,
      title: 'AI / Machine Learning Projects',
      description: 'Intelligent applications powered by machine learning and data science.',
      features: [
        'Predictive Models',
        'Natural Language Processing',
        'Computer Vision',
        'Data Analysis & Visualization',
        'Model Training & Deployment',
        'API Integration'
      ],
      popular: false
    },
    {
      icon: <FiBook />,
      title: 'College & Final Year Projects',
      description: 'Academic projects designed to impress evaluators and demonstrate real skills.',
      features: [
        'Project Documentation',
        'Working Implementation',
        'Presentation Support',
        'Code Explanation',
        'Viva Preparation Help',
        'Plagiarism-Free Code'
      ],
      popular: true
    },
    {
      icon: <FiLayout />,
      title: 'Frontend Development',
      description: 'Beautiful, responsive user interfaces that provide excellent user experience.',
      features: [
        'React / Vue / Angular',
        'Responsive Design',
        'Modern UI/UX',
        'Animation & Interactions',
        'Cross-Browser Support',
        'Performance Optimization'
      ],
      popular: false
    },
    {
      icon: <FiDatabase />,
      title: 'Backend Development',
      description: 'Scalable and secure server-side solutions for your applications.',
      features: [
        'Node.js / Python / Java',
        'RESTful API Design',
        'Database Architecture',
        'Security Implementation',
        'Third-Party Integrations',
        'Cloud Deployment'
      ],
      popular: false
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android.',
      features: [
        'React Native',
        'Flutter',
        'Native-Like Performance',
        'Push Notifications',
        'Offline Support',
        'App Store Deployment'
      ],
      popular: false
    }
  ];

  const techStack = [
    { category: 'Frontend', techs: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', techs: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI'] },
    { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'] },
    { category: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas'] },
    { category: 'DevOps', techs: ['Docker', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions'] }
  ];

  return (
    <div className="services-page">
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
            <FiZap /> Our Services
          </span>
          <h1>What We <span className="text-gradient">Build</span></h1>
          <p className="page-subtitle">
            From Full Stack web applications to AI-powered solutions,
            we deliver real, working projects tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-dark">
        <div className="container">
          <div className="services-full-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-full-card ${service.popular ? 'popular' : ''}`}>
                {service.popular && <span className="popular-badge">Popular</span>}
                <div className="service-full-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FiCheck /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-secondary">
                  Get Quote <FiArrowRight className="btn-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FiCode /> Tech Stack
            </span>
            <h2 className="section-title">
              Technologies We <span className="text-gradient">Use</span>
            </h2>
            <p className="section-description">
              Modern, industry-standard tools and frameworks
            </p>
          </div>
          <div className="tech-grid">
            {techStack.map((stack, index) => (
              <div key={index} className="tech-category">
                <h4>{stack.category}</h4>
                <div className="tech-tags">
                  {stack.techs.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="results-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FiShield /> Our Guarantees
            </span>
            <h2 className="section-title">
              What We <span className="text-gradient">Promise</span>
            </h2>
          </div>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-metric">100%</div>
              <div className="result-label">Working Guarantee</div>
              <div className="result-bar">
                <div className="result-bar-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="result-card">
              <div className="result-metric">Free</div>
              <div className="result-label">Bug Fixes Post Delivery</div>
              <div className="result-bar">
                <div className="result-bar-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="result-card">
              <div className="result-metric">Full</div>
              <div className="result-label">Source Code Ownership</div>
              <div className="result-bar">
                <div className="result-bar-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="result-card">
              <div className="result-metric">24/7</div>
              <div className="result-label">Support Available</div>
              <div className="result-bar">
                <div className="result-bar-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Start Your Project?
            </h2>
            <p className="cta-description">
              Tell us about your idea and we'll help you bring it to life
              with a fully working implementation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Consultation <FiArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
