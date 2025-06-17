import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './HeroSection.scss';

gsap.registerPlugin(ScrollTrigger);

const leftImages = ['/images/user1.jpg', '/images/user2.jpg', '/images/user3.jpg', '/images/user4.jpg'];
const rightImages = ['/images/user4.jpg', '/images/user5.jpg', '/images/user6.jpg', '/images/user3.jpg'];

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
   
      gsap.from('.hero-icon', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 85%',
        }
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        }
      })
        .from('.hero-title', {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        })
        .from('.hero-description', {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        }, '-=0.6')
        .from('.learn-more-btn', {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }, '-=0.5');

      if (leftRef.current) {
        const leftImgs = Array.from(leftRef.current.children);
        gsap.from(leftImgs, {
          x: -60,
          opacity: 0,
          rotate: -15,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 90%',
          }
        });
        leftImgs.forEach((img, i) => {
          gsap.to(img, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 2 + i * 0.3,
            ease: 'sine.inOut',
            delay: 1.2 + i * 0.1,
          });
        });
      }

      if (rightRef.current) {
        const rightImgs = Array.from(rightRef.current.children);
        gsap.from(rightImgs, {
          x: 60,
          opacity: 0,
          rotate: 15,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 90%',
          }
        });
    
        rightImgs.forEach((img, i) => {
          gsap.to(img, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 2.2 + i * 0.3,
            ease: 'sine.inOut',
            delay: 1.2 + i * 0.1,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box className="hero-section" ref={heroRef}>
      <Box className="profile-curve left-curve" ref={leftRef}>
        {leftImages.map((src, idx) => (
          <img key={idx} src={src} alt={`User Left ${idx + 1}`} className={`img img-${idx}`} />
        ))}
      </Box>

      <Box className="hero-content" ref={contentRef}>
        <Box className="hero-icon">
          <AccountCircleIcon style={{ fontSize: 40, color: '#9b6dff' }} />
        </Box>
        <Typography variant="h3" className="hero-title">
          Core HR <br /> solutions
        </Typography>
        <Typography className="hero-description">
          Streamline HR processes in one centralized platform, enhancing team transparency.
        </Typography>
        <Button className="learn-more-btn">Learn more</Button>
      </Box>

      <Box className="profile-curve right-curve" ref={rightRef}>
        {rightImages.map((src, idx) => (
          <img key={idx} src={src} alt={`User Right ${idx + 1}`} className={`img img-${idx}`} />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
