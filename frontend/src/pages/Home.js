import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiCode, FiCpu, FiBook, FiArrowRight, FiCheck,
  FiLayers, FiZap, FiShield, FiGlobe, FiUsers,
  FiTrendingUp, FiAward, FiPlay,
  FiCheckCircle
} from 'react-icons/fi';
import { SiGoogle, SiLinkedin } from 'react-icons/si';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Full Stack Apps', 'AI/ML Models', 'Web Platforms', 'Mobile Apps', 'Academic Projects'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex, words]);

  const services = [
    {
      icon: <FiCode />,
      title: 'Full Stack Development',
      description: 'Complete web applications with React, Node.js, and modern databases. From frontend to backend, we build it all.'
    },
    {
      icon: <FiCpu />,
      title: 'AI & Machine Learning',
      description: 'Intelligent applications powered by TensorFlow, PyTorch, and cutting-edge ML algorithms.'
    },
    {
      icon: <FiBook />,
      title: 'Academic Projects',
      description: 'Final year and major projects with complete documentation, presentations, and viva support.'
    },
    {
      icon: <FiLayers />,
      title: 'System Architecture',
      description: 'Scalable system design with microservices, cloud infrastructure, and best practices.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '100%', label: 'Success Rate' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' }
  ];

  const results = [
    { metric: '200%', label: 'Faster Development', progress: 95 },
    { metric: '100%', label: 'Working Guarantee', progress: 100 },
    { metric: '50K+', label: 'Lines of Code', progress: 85 },
    { metric: '4.9/5', label: 'Client Rating', progress: 98 }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '0',
      description: 'Perfect for small projects and consultations',
      features: [
        'Free project consultation',
        'Requirements analysis',
        'Tech stack recommendation',
        'Basic project scope',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '199',
      description: 'Most popular for academic and startup projects',
      features: [
        'Full project development',
        'Source code ownership',
        'Documentation included',
        'Deployment assistance',
        'Priority support',
        '30-day bug fixes'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: '499',
      description: 'For complex, large-scale applications',
      features: [
        'Everything in Professional',
        'Advanced architecture',
        'Performance optimization',
        'Security audit',
        'Dedicated support',
        '90-day maintenance'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple projects take 1-2 weeks, while complex applications may take 4-8 weeks.'
    },
    {
      question: 'Do you provide source code?',
      answer: 'Yes, you get complete ownership of all source code. We provide clean, well-documented code that you can modify and extend.'
    },
    {
      question: 'What if I need changes after delivery?',
      answer: 'We offer free bug fixes for 30 days post-delivery. Additional features can be discussed as a new scope.'
    },
    {
      question: 'Can you help with deployment?',
      answer: 'Absolutely! We assist with deployment to your preferred platform including AWS, Vercel, Netlify, or any other service.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-dark">
        <div className="hero-grid-bg"></div>

        {/* 3D Animated Background */}
        <div className="hero-3d-background">
          {/* Floating 3D Cubes */}
          <div className="shape-3d cube-1">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>

          <div className="shape-3d cube-2">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>

          {/* Floating 3D Pyramids */}
          <div className="shape-3d pyramid-1">
            <div className="pyramid-face base"></div>
            <div className="pyramid-face side1"></div>
            <div className="pyramid-face side2"></div>
            <div className="pyramid-face side3"></div>
            <div className="pyramid-face side4"></div>
          </div>

          <div className="shape-3d pyramid-2">
            <div className="pyramid-face base"></div>
            <div className="pyramid-face side1"></div>
            <div className="pyramid-face side2"></div>
            <div className="pyramid-face side3"></div>
            <div className="pyramid-face side4"></div>
          </div>

          {/* Floating Spheres with gradient */}
          <div className="sphere-3d sphere-1"></div>
          <div className="sphere-3d sphere-2"></div>
          <div className="sphere-3d sphere-3"></div>

          {/* Floating Rings */}
          <div className="ring-3d ring-1"></div>
          <div className="ring-3d ring-2"></div>
        </div>

        <div className="container">
          <div className="hero-content-dark">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              Now accepting new projects
            </div>

            <h1 className="hero-title-dark">
              <span className="line">We Build Real</span>
              <span className="line">
                <span className="highlight">{typedText}</span>
                <span className="cursor">|</span>
              </span>
            </h1>

            <p className="hero-description-dark">
              We help students and developers build 100% working Full Stack and AI projects
              with hands-on guidance and real-world implementation. From concept to deployment.
            </p>

            <div className="hero-cta-dark">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
                <FiArrowRight className="btn-icon" />
              </Link>
              <button className="btn btn-secondary btn-lg">
                <FiPlay style={{ marginRight: '8px' }} />
                Watch Demo
              </button>
            </div>

            <div className="trust-badges">
              <div className="trust-badge">
                <SiGoogle />
                <span className="trust-badge-text">Google</span>
              </div>
              <div className="trust-badge">
                <FiCode />
                <span className="trust-badge-text">GitHub</span>
              </div>
              <div className="trust-badge">
                <SiLinkedin />
                <span className="trust-badge-text">LinkedIn</span>
              </div>
              <div className="trust-badge">
                <FiAward />
                <span className="trust-badge-text">Certified</span>
              </div>
            </div>
          </div>
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

      {/* Services Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FiZap /> Our Services
            </span>
            <h2 className="section-title">
              Project Development That<br />
              <span className="text-gradient">Delivers Real Results</span>
            </h2>
            <p className="section-description">
              We specialize in building production-ready applications that actually work.
              No demos. No prototypes. Real, functional projects.
            </p>
          </div>

          <div className="features-grid">
            {services.map((service, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="feature-link">
                  Learn More <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <div className="results-header">
            <div className="results-header-content">
              <span className="section-eyebrow">
                <FiTrendingUp /> Proven Results
              </span>
              <h2 className="section-title">
                Proven Results<br />
                <span className="text-gradient">You Can Trust</span>
              </h2>
            </div>
            <Link to="/projects" className="btn btn-secondary">
              View All Projects <FiArrowRight className="btn-icon" />
            </Link>
          </div>

          <div className="results-grid">
            {results.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-metric">{result.metric}</div>
                <div className="result-label">{result.label}</div>
                <div className="result-bar">
                  <div
                    className="result-bar-fill"
                    style={{ width: `${result.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FiShield /> Pricing
            </span>
            <h2 className="section-title">
              Flexible Pricing for<br />
              <span className="text-gradient">Every Budget</span>
            </h2>
            <p className="section-description">
              Choose the plan that fits your needs. All plans include our quality guarantee.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                <div className="pricing-header">
                  <div className="pricing-name">{plan.name}</div>
                  <div className="pricing-price">
                    <span className="pricing-currency">$</span>
                    <span className="pricing-amount">{plan.price}</span>
                    <span className="pricing-period">/project</span>
                  </div>
                  <p className="pricing-description">{plan.description}</p>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature">
                      <FiCheckCircle />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Get Started <FiArrowRight className="btn-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FiUsers /> FAQ
            </span>
            <h2 className="section-title">
              Your Questions<br />
              <span className="text-gradient">Answered</span>
            </h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Build Your Project?
            </h2>
            <p className="cta-description">
              We don't just build projects — we help you gain real experience.
              Contact us today and let's turn your idea into reality.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <FiArrowRight className="btn-icon" />
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
