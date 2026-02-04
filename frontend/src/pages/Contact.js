import React, { useState } from 'react';
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle,
  FiMessageCircle
} from 'react-icons/fi';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: 'fullstack', label: 'Full Stack Development' },
    { value: 'aiml', label: 'AI / Machine Learning' },
    { value: 'academic', label: 'College / Academic Project' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // MOCK SUBMISSION
      await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      const errorMessage = error.response?.data?.errors?.[0]?.msg
        || error.response?.data?.message
        || 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      content: 'contact@devbuild.com',
      link: 'mailto:contact@devbuild.com'
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Available Worldwide',
      link: null
    }
  ];



  return (
    <div className="contact-page">
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
            <FiMessageCircle /> Contact Us
          </span>
          <h1>Let's Build <span className="text-gradient">Together</span></h1>
          <p className="page-subtitle">
            Have a project idea? Get in touch and we'll help you turn it into reality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We're here to help you build your project. Reach out to us
                through any of the following channels or fill out the form.
              </p>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-card-icon">{info.icon}</div>
                    <div className="contact-card-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.content}</a>
                      ) : (
                        <span>{info.content}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="response-time">
                <p>We typically respond within 24 hours.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send us a Message</h3>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                    {status.message}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project idea, requirements, and any specific features you need..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
