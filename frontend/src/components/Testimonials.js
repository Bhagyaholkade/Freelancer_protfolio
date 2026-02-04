import { useState, useEffect } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import { testimonialService } from '../services/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Sample testimonials
  const sampleTestimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Computer Science Student',
      company: 'IIT Delhi',
      content: 'DevBuild helped me complete my final year project on time. The code quality was excellent, and they explained everything so I could present it confidently. Highly recommend for any student struggling with their projects!',
      rating: 5,
      avatarUrl: null,
      projectType: 'academic'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Startup Founder',
      company: 'TechStart',
      content: 'We needed an MVP built quickly for our startup pitch. DevBuild delivered a fully functional full-stack application that impressed our investors. Professional, responsive, and great communication throughout.',
      rating: 5,
      avatarUrl: null,
      projectType: 'fullstack'
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      role: 'Data Science Student',
      company: 'BITS Pilani',
      content: 'The AI/ML project they built for me was beyond expectations. Not only did it work perfectly, but they also helped me understand the algorithms and prepare for my viva. Got the highest grade in my batch!',
      rating: 5,
      avatarUrl: null,
      projectType: 'aiml'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Freelance Developer',
      company: 'Self-employed',
      content: 'I outsourced a complex backend project to DevBuild when I was overloaded with work. They delivered clean, well-documented code that integrated seamlessly with the existing system. Will definitely work with them again!',
      rating: 5,
      avatarUrl: null,
      projectType: 'backend'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'MBA Student',
      company: 'ISB Hyderabad',
      content: 'Needed a data visualization dashboard for my thesis. DevBuild created an interactive dashboard that made my research findings come alive. The presentation was a huge success thanks to their work.',
      rating: 5,
      avatarUrl: null,
      projectType: 'frontend'
    }
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await testimonialService.getAll({ featured: true });
      if (response.data && response.data.length > 0) {
        setTestimonials(response.data);
      } else {
        setTestimonials(sampleTestimonials);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials(sampleTestimonials);
    } finally {
      setLoading(false);
    }
  };

  const displayTestimonials = testimonials.length > 0 ? testimonials : sampleTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === displayTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? displayTestimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FiStar
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <FiMessageSquare /> Testimonials
          </span>
          <h2 className="section-title">
            What Our Clients<br />
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="section-description">
            Real feedback from students and professionals we've helped
          </p>
        </div>

        <div className="testimonials-wrapper">
          {/* Navigation Arrows */}
          <button
            className="testimonial-nav prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>

          {/* Testimonial Card */}
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                {displayTestimonials[currentIndex]?.content}
              </p>
              <div className="testimonial-rating">
                {renderStars(displayTestimonials[currentIndex]?.rating || 5)}
              </div>
            </div>

            <div className="testimonial-author">
              <div className="author-avatar">
                {displayTestimonials[currentIndex]?.avatarUrl ? (
                  <img
                    src={displayTestimonials[currentIndex].avatarUrl}
                    alt={displayTestimonials[currentIndex].name}
                  />
                ) : (
                  <div className="avatar-placeholder">
                    {getInitials(displayTestimonials[currentIndex]?.name || 'U')}
                  </div>
                )}
              </div>
              <div className="author-info">
                <h4>{displayTestimonials[currentIndex]?.name}</h4>
                <p>
                  {displayTestimonials[currentIndex]?.role}
                  {displayTestimonials[currentIndex]?.company &&
                    ` at ${displayTestimonials[currentIndex].company}`}
                </p>
              </div>
            </div>
          </div>

          <button
            className="testimonial-nav next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="testimonial-dots">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Desktop) */}
        <div className="testimonials-grid">
          {displayTestimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="testimonial-grid-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatarUrl ? (
                    <img src={testimonial.avatarUrl} alt={testimonial.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
