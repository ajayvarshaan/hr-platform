import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './HeroSection.scss';

// ✅ Import images from src/assets/images
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user5 from '../assets/images/user5.jpg';
import user6 from '../assets/images/user6.jpg';
import user7 from '../assets/images/user7.jpg';

// ✅ Update image arrays
const leftImages = [user5, user6, user7, user2];
const rightImages = [user1, user2, user3, user6];

const HeroSection: React.FC = () => {
  return (
    <Box className="hero-section">
      {/* Invisible SVG Paths (for animations like GSAP if needed) */}
      <svg width="0" height="0">
        <defs>
          <path id="leftPath" d="M100,0 C250,500 250,1200 100,1300" />
          <path id="rightPath" d="M100,0 C-50,500 -50,1200 300,1300" />
        </defs>
      </svg>

      {/* Left Side Profile Images */}
      <div className="image-track left-track">
        {[...Array(5)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="profile-card left-img"
            style={{ animationDelay: `${i * 3}s` }}
          >
            <img src={leftImages[i % leftImages.length]} alt={`left-${i}`} />
          </div>
        ))}
      </div>

      {/* Right Side Profile Images */}
      <div className="image-track right-track">
        {[...Array(5)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="profile-card right-img"
            style={{ animationDelay: `${i * 3}s` }}
          >
            <img src={rightImages[i % rightImages.length]} alt={`right-${i}`} />
          </div>
        ))}
      </div>

      {/* Center Text and Button */}
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
