import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight, FiCheck,
  FiZap, FiShield, FiUsers,
  FiTrendingUp, FiAward,
  FiCheckCircle
} from 'react-icons/fi';
import Testimonials from '../components/Testimonials';
import { services, stats, results, pricingPlans, faqs } from '../data/homeData';

// Defined outside component — prevents new array reference on every render
const TYPING_WORDS = ['Web Apps', 'AI Products', 'SaaS Tools', 'Mobile Apps', 'Ecommerce Stores'];

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[currentWordIndex];
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
          setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex]); // words array moved outside — no longer a dep

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
              ✅ Accepting 2 new clients this month · Bengaluru, India
            </div>

            <h1 className="hero-title-dark">
              <span className="line">We Build Websites &amp; </span>
              <span className="line">
                <span className="highlight">{typedText}</span>
                <span className="cursor">|</span>
              </span>
              <span className="line">That Grow Your Business</span>
            </h1>

            <p className="hero-description-dark">
              Kiran &amp; Bhagya — full-stack engineers from Bengaluru. We've shipped 50+ projects
              for startups, SMBs, and students. From landing pages to custom AI chatbots.
              <strong> No demos. No excuses. Just shipping.</strong>
            </p>

            <div className="hero-cta-dark">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Free Quote
                <FiArrowRight className="btn-icon" />
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                See Our Work
                <FiArrowRight className="btn-icon" />
              </Link>
            </div>

            <div className="trust-badges">
              <div className="trust-badge">
                <FiAward />
                <span className="trust-badge-text">⭐ 4.9 Rated</span>
              </div>
              <div className="trust-badge">
                <FiCheckCircle />
                <span className="trust-badge-text">50+ Projects Shipped</span>
              </div>
              <div className="trust-badge">
                <FiUsers />
                <span className="trust-badge-text">Bengaluru, India</span>
              </div>
              <div className="trust-badge">
                <FiZap />
                <span className="trust-badge-text">24hr Response</span>
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
            <p className="section-description">
              Everything you need to know about our services and process
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="faq-content">
                  <h4 className="faq-question">
                    <FiCheck className="faq-icon" />
                    {faq.question}
                  </h4>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
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
