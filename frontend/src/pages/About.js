import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiTarget, FiHeart, FiUsers, FiAward, FiArrowRight,
  FiCode, FiCpu, FiLayers, FiZap, FiShield, FiGlobe,
  FiCheckCircle, FiTrendingUp, FiStar
} from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: <FiTarget />,
      title: 'Quality First',
      description: 'Every line of code is crafted with precision. We never compromise on quality.'
    },
    {
      icon: <FiHeart />,
      title: 'Client Success',
      description: 'Your success is our success. We go above and beyond to ensure your project succeeds.'
    },
    {
      icon: <FiUsers />,
      title: 'Collaboration',
      description: 'We work closely with you, keeping you involved at every step of the development process.'
    },
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to communication.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '100%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const expertise = [
    { icon: <FiCode />, name: 'Full Stack Development', level: 95 },
    { icon: <FiCpu />, name: 'AI & Machine Learning', level: 90 },
    { icon: <FiLayers />, name: 'System Architecture', level: 88 },
    { icon: <FiGlobe />, name: 'Cloud & DevOps', level: 85 }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Started helping fellow students with their academic projects and assignments.'
    },
    {
      year: '2023',
      title: 'Growing Impact',
      description: 'Expanded to full-stack development and AI/ML projects for startups.'
    },
    {
      year: '2024',
      title: 'DevBuild Launch',
      description: 'Officially launched as a professional freelancing platform.'
    },
    {
      year: '2025',
      title: 'Scaling Up',
      description: '150+ projects delivered with 100% client satisfaction.'
    }
  ];

  const whyChooseUs = [
    { icon: <FiZap />, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
    { icon: <FiShield />, title: '100% Working', desc: 'Every project is tested and production-ready' },
    { icon: <FiCheckCircle />, title: 'Clean Code', desc: 'Well-documented, maintainable codebase' },
    { icon: <FiTrendingUp />, title: 'Modern Stack', desc: 'Latest technologies and best practices' }
  ];

  return (
    <div className="about-page">
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
            <FiStar /> About Us
          </span>
          <h1>We Build Projects That <span className="text-gradient">Actually Work</span></h1>
          <p className="page-subtitle">
            A team of passionate developers dedicated to helping students and businesses
            turn their ideas into reality with clean, production-ready code.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <span className="section-eyebrow">
                <FiTarget /> Our Mission
              </span>
              <h2 className="section-title">
                Bridging the Gap Between<br />
                <span className="text-gradient">Learning and Implementation</span>
              </h2>
              <p>
                We started DevBuild with a simple observation: many talented students
                struggle to build major projects, understand end-to-end development,
                or gain real project experience.
              </p>
              <p>
                Our mission is to change that. We don't just build projects — we help
                you understand the process, learn the technologies, and gain the
                confidence to present and extend your work.
              </p>
              <p>
                Every project we deliver is 100% working, properly documented, and
                built with industry best practices. We're not about shortcuts or
                demo-only code. We build real applications that you can be proud of.
              </p>
            </div>

            <div className="mission-visual">
              <div className="expertise-card">
                <h4>Our Expertise</h4>
                <div className="expertise-list">
                  {expertise.map((item, index) => (
                    <div key={index} className="expertise-item">
                      <div className="expertise-header">
                        <span className="expertise-icon">{item.icon}</span>
                        <span className="expertise-name">{item.name}</span>
                        <span className="expertise-level">{item.level}%</span>
                      </div>
                      <div className="expertise-bar">
                        <div
                          className="expertise-progress"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FiHeart /> Our Values
            </span>
            <h2 className="section-title">
              What Drives <span className="text-gradient">Us Forward</span>
            </h2>
            <p className="section-description">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="features-grid">
            {values.map((value, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FiTrendingUp /> Our Journey
            </span>
            <h2 className="section-title">
              From Students <span className="text-gradient">to Professionals</span>
            </h2>
            <p className="section-description">
              How we grew from helping friends to serving clients worldwide
            </p>
          </div>

          <div className="journey-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="journey-item">
                <div className="journey-year">{milestone.year}</div>
                <div className="journey-connector">
                  <div className="journey-dot"></div>
                  {index < milestones.length - 1 && <div className="journey-line"></div>}
                </div>
                <div className="journey-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <div className="container">
          <div className="why-choose-wrapper">
            <div className="why-choose-content">
              <span className="section-eyebrow">
                <FiAward /> Why DevBuild
              </span>
              <h2 className="section-title">
                More Than Just <span className="text-gradient">Code Delivery</span>
              </h2>
              <p>
                We understand that for students, a project isn't just about submission.
                It's about learning, understanding, and being able to defend your work.
                That's why we go beyond just delivering code.
              </p>

              <div className="why-choose-grid">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="why-choose-item">
                    <div className="why-choose-icon">{item.icon}</div>
                    <div className="why-choose-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-choose-features">
              <div className="feature-highlight-card">
                <h4>What You Get</h4>
                <ul className="feature-checklist">
                  <li><FiCheckCircle /> Complete source code ownership</li>
                  <li><FiCheckCircle /> Detailed documentation</li>
                  <li><FiCheckCircle /> Code walkthrough session</li>
                  <li><FiCheckCircle /> Deployment assistance</li>
                  <li><FiCheckCircle /> Post-delivery support</li>
                  <li><FiCheckCircle /> Viva/presentation guidance</li>
                  <li><FiCheckCircle /> Free bug fixes</li>
                  <li><FiCheckCircle /> Technology explanations</li>
                </ul>
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
              Let's Build Something Amazing Together
            </h2>
            <p className="cta-description">
              Whether you're a student with an academic project or a startup with
              a product idea, we're here to help you succeed.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <FiArrowRight className="btn-icon" />
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
