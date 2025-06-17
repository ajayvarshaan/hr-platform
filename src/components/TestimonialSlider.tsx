import { useState } from 'react';
import './TestimonialSlider.scss';
import { Typography, Button } from '@mui/material';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'HR Director at Nexa Solutions',
    rating: 5.0,
    image: '/images/user1.jpg',
    review:
      'CoreShift has streamlined our HR processes, making tasks like onboarding and performance tracking more efficient.',
  },
  {
    name: 'David Lee',
    role: 'Product Manager at DevSpace',
    rating: 4.8,
    image: '/images/user2.jpg',
    review: 'The seamless integration with our tools saved us weeks of manual work.',
  },
  {
    name: 'Priya Kumar',
    role: 'Founder at StartNova',
    rating: 5.0,
    image: '/images/user3.jpg',
    review: 'CoreShift helped us stay organized and scale smoothly during our rapid growth phase.',
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const current = testimonials[index];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 300);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, 300);
  };

  return (
    <section className="testimonial-section">
      <Typography variant="h4" className="heading">Words of Appreciation</Typography>
      <Typography className="subheading">
        Thousands of businesses, from startups to enterprises, use CoreShift to handle workflows.
      </Typography>

      <div className="envelope-wrapper">
        <div
          className="envelope-container"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={isOpen ? '/images/envalope-open.jpg' : '/images/envalope-close.jpg'}
            alt="Envelope"
            className={`envelope-image ${isOpen ? 'open' : 'closed'}`}
          />

          {isOpen && (
            <div className="testimonial-card" onClick={() => setIsOpen(false)}>
              <div className="card-top">
                <img className="profile-img" src={current.image} alt={current.name} />
                <div className="info">
                  <h3>{current.name}</h3>
                  <p className="role">{current.role}</p>
                </div>
              </div>
              <div className="rating">
                {'★'.repeat(Math.floor(current.rating))} <span>{current.rating.toFixed(1)}</span>
              </div>
              <p className="review">“{current.review}”</p>
            </div>
          )}
        </div>

        <div className="btn-wrapper">
          <Button className="nav-btn" onClick={handlePrev}>←</Button>
          <Button className="nav-btn" onClick={handleNext}>→</Button>
        </div>
      </div>
    </section>
  );
}
