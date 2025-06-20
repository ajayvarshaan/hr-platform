import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Paper
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TestimonialSlider.scss';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'James Carter',
    role: 'HR Manager at BrightPath Solutions',
    rating: 5.0,
    image: '/images/user1.jpg',
    review: 'The platform is easy to use, keeps everything in one place, and helps our team stay on top of things without extra hassle.',
  },
  {
    name: 'Anika Sharma',
    role: 'CTO at DevCraft',
    rating: 4.9,
    image: '/images/user2.jpg',
    review: 'CoreShift empowered our team to collaborate better and achieve faster onboarding.',
  },
  {
    name: 'Lucas Bennett',
    role: 'Founder at Softify',
    rating: 5.0,
    image: '/images/user3.jpg',
    review: 'A fantastic HR platform that adapts to our needs. It has made a real difference in productivity.',
  },
];

const TestimonialSlider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen(true);
    setIndex(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardClass = (i: number) => {
    if (i === index) return 'card active';
    if (i === (index - 1 + testimonials.length) % testimonials.length) return 'card prev';
    if (i === (index + 1) % testimonials.length) return 'card next';
    return 'card hidden';
  };

  return (
    <Box className="testimonial-wrapper">
      <Typography variant="h3" className="heading">
        Words of Appreciation
      </Typography>
      <Typography className="subheading">
        Thousands of businesses, from startups to enterprises, use CoreShift to handle payments.
      </Typography>

      {!isOpen ? (
        <Box className="envelope-cover" onClick={handleToggle}>
          <img src="/images/envalope-close.jpg" alt="Envelope Closed" />
        
        </Box>
      ) : (
        <Box className="carousel">
          <IconButton className="nav-btn" onClick={handlePrev}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box className="cards-wrapper">
            {testimonials.map((testimonial, i) => (
              <Paper
                elevation={6}
                className={getCardClass(i)}
                key={i}
                onClick={handleClose}
              >
                <Avatar src={testimonial.image} alt={testimonial.name} className="avatar" />
                <Typography variant="h6" className="name">{testimonial.name}</Typography>
                <Typography className="role">{testimonial.role}</Typography>
                <Typography className="rating">★ {testimonial.rating.toFixed(1)}</Typography>
                <Typography className="review">“{testimonial.review}”</Typography>
              </Paper>
            ))}
          </Box>

          <IconButton className="nav-btn" onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default TestimonialSlider;
