import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './HeroSection.scss';

const leftImages = [
  '/images/user1.jpg',
  '/images/user2.jpg',
  '/images/user3.jpg',
  
];

const rightImages = [
  '/images/user5.jpg',
  '/images/user6.jpg',
  '/images/user7.jpg',

];

const HeroSection: React.FC = () => {
  return (
    <Box className="hero-section">
      {/* SVG paths to define motion paths */}
      <svg width="0" height="0">
        <defs>
          <path id="leftPath" d="M100,0 C200,300 200,700 100,1000" />
          <path id="rightPath" d="M100,0 C0,300 0,700 100,1000" />
        </defs>
      </svg>

      {/* Left side - Mirror C */}
      <div className="image-track left-track">
        {[...Array(8)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="profile-card left-img"
            style={{ animationDelay: `${i * 2}s` }}
          >
            <img src={leftImages[i % leftImages.length]} alt={`left-${i}`} />
          </div>
        ))}
      </div>

      {/* Right side - C */}
      <div className="image-track right-track">
        {[...Array(8)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="profile-card right-img"
            style={{ animationDelay: `${i * 2}s` }}
          >
            <img src={rightImages[i % rightImages.length]} alt={`right-${i}`} />
          </div>
        ))}
      </div>

      {/* Center content */}
      <Box className="hero-content">
        <Box className="hero-icon">
          <AccountCircleIcon sx={{ fontSize: 40, color: '#9b6dff' }} />
        </Box>
        <Typography variant="h3" className="hero-title">
          Core HR <br /> solutions
        </Typography>
        <Typography className="hero-description">
          Streamline HR processes in one centralized platform, enhancing team transparency.
        </Typography>
        <Button className="learn-more-btn">LEARN MORE</Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
