import { useState } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

// TODO: Replace these with real testimonials from actual clients before launch
const TESTIMONIALS = [
  { id: 1, name: 'Rahul Sharma', role: 'Computer Science Student', company: 'VTU, Bengaluru', content: 'Excellent code quality and clear explanations. Helped me ace my final year project presentation!', rating: 5, avatarUrl: null, projectType: 'academic' },
  { id: 2, name: 'Priya Patel', role: 'Startup Founder', company: 'TechStart', content: 'Delivered a fully functional MVP that impressed our investors. Professional and responsive!', rating: 5, avatarUrl: null, projectType: 'fullstack' },
  { id: 3, name: 'Arjun Mehta', role: 'Data Science Student', company: 'PES University', content: 'Beyond expectations! They helped me understand the algorithms and got me the highest grade.', rating: 5, avatarUrl: null, projectType: 'aiml' },
  { id: 4, name: 'Sneha Reddy', role: 'Freelance Developer', company: 'Self-employed', content: 'Clean, well-documented code that integrated seamlessly. Will definitely work with them again!', rating: 5, avatarUrl: null, projectType: 'backend' },
  { id: 5, name: 'Vikram Singh', role: 'Small Business Owner', company: 'Bengaluru', content: 'Got my business website up in 2 weeks exactly as promised. Customer inquiries have gone up noticeably!', rating: 5, avatarUrl: null, projectType: 'fullstack' }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayTestimonials = TESTIMONIALS;

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

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <FiMessageSquare /> Testimonials
          </span>
          <h2 className="section-title">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="section-description">
            Trusted by students and professionals worldwide
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
      </div>
    </section>
  );
};

export default Testimonials;
