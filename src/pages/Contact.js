import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle,
  FiMessageCircle, FiClock, FiArrowRight
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// ─────────────────────────────────────────────────────
// SETUP INSTRUCTIONS — do this once (free, 5 minutes):
//  1. Go to https://www.emailjs.com  → create a free account
//  2. Add an Email Service (Gmail works) → copy SERVICE ID
//  3. Create an Email Template → copy TEMPLATE ID
//     Template variables to use: {{from_name}}, {{reply_to}},
//     {{phone}}, {{project_type}}, {{message}}
//  4. Go to Account > API Keys → copy your PUBLIC KEY
//  5. Add these to your .env file:
//     REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
//     REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//     REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
// ─────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL || 'kbytes.dev@gmail.com';
const CONTACT_PHONE = process.env.REACT_APP_CONTACT_PHONE || '+91 XXXXX XXXXX';
const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '91XXXXXXXXXX';

const Contact = () => {
  const formRef = useRef(null);
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
    { value: 'business-website', label: 'Business Website / Landing Page' },
    { value: 'webapp', label: 'Custom Web App / SaaS Product' },
    { value: 'aiml', label: 'AI Feature / Chatbot' },
    { value: 'fullstack', label: 'Full Stack Development' },
    { value: 'academic', label: 'College / Academic Project' },
    { value: 'other', label: 'Other / Not Sure Yet' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Guard: warn if EmailJS isn't configured yet
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: `EmailJS not configured yet. Please email us directly at ${CONTACT_EMAIL} or WhatsApp us.`
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone || 'Not provided',
          project_type: formData.projectType,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: "✅ Message sent! We'll get back to you within 24 hours."
      });
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: `Something went wrong. Please email us at ${CONTACT_EMAIL} or WhatsApp us directly.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      content: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: <FiPhone />,
      title: 'Call / WhatsApp',
      content: CONTACT_PHONE,
      link: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KBytes! I have a project inquiry.')}`
    },
    {
      icon: <FiMapPin />,
      title: 'Based In',
      content: 'Bengaluru, India · Available Worldwide',
      link: null
    },
    {
      icon: <FiClock />,
      title: 'Response Time',
      content: 'Within 24 hours',
      link: null
    }
  ];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KBytes! I have a project inquiry and would like to discuss further.')}`;

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
            Have a project idea? Get in touch — we'll reply within 24 hours.
            Prefer a quick chat? WhatsApp us directly.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
            >
              <FaWhatsapp style={{ fontSize: '1.25rem' }} />
              WhatsApp Us Now
            </a>
          </div>
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
                We're here to help. Reach out through any channel — or fill out the form
                and we'll get back to you within 24 hours.
              </p>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-card-icon">{info.icon}</div>
                    <div className="contact-card-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {info.content}
                        </a>
                      ) : (
                        <span>{info.content}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="whatsapp-cta-card">
                <FaWhatsapp className="whatsapp-cta-icon" />
                <div>
                  <h4>Prefer WhatsApp?</h4>
                  <p>Chat with us directly for a faster response.</p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ borderColor: '#25D366', color: '#25D366', whiteSpace: 'nowrap' }}
                >
                  Open Chat <FiArrowRight />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <h3>Send us a Message</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  Tell us about your project and we'll send a detailed quote.
                </p>

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
                    placeholder="Rahul Sharma"
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
                      placeholder="rahul@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp / Phone</label>
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
                  <label htmlFor="projectType">What do you need? *</label>
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
                  <label htmlFor="message">Tell us about your project *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to build, your timeline, and any specific features..."
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

                <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', opacity: 0.6 }}>
                  We reply within 24 hours · No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
