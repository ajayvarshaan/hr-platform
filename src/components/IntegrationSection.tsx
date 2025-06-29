import React, { useEffect, useRef, useState } from 'react';
import './IntegrationSection.scss';
import { Box, Typography, Paper, Container } from '@mui/material';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// ✅ Import images from /src/assets/icons
import teamsIcon from '../assets/icons/teams.png';
import gmailIcon from '../assets/icons/gmail.png';
import loomIcon from '../assets/icons/loom.png';
import meetIcon from '../assets/icons/meet.png';
import outlookIcon from '../assets/icons/outlook.png';
import settingsIcon from '../assets/icons/settings.png';

gsap.registerPlugin(MotionPathPlugin);

const integrations = [
  { name: 'Teams', src: teamsIcon },
  { name: 'Gmail', src: gmailIcon },
  { name: 'Loom', src: loomIcon },
  { name: 'Google Meet', src: meetIcon },
  { name: 'Outlook', src: outlookIcon },
];

const descriptions: Record<string, string> = {
  Teams: 'Microsoft Teams: Team collaboration & chat',
  Gmail: 'Gmail: Email from Google',
  Loom: 'Loom: Video feedback & communication',
  'Google Meet': 'Google Meet: Video conferencing',
  Outlook: 'Outlook: Email & calendar from Microsoft',
};

const IntegrationSection: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [descKey, setDescKey] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const iconEls = document.querySelectorAll('.icon-card');

    iconEls.forEach((icon, index) => {
      gsap.to(icon, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
        },
        duration: 10,
        repeat: -1,
        ease: 'linear',
        delay: index * 2,
      });
    });
  }, []);

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        setSelected(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [descKey, selected]);

  return (
    <Box className="integration-section">
      <Container maxWidth="md">
        {/* Settings Icon */}
        <Box className="top-icon">
          <img src={settingsIcon} alt="Settings" />
        </Box>

        {/* Heading */}
        <Typography
          className="headline"
          fontFamily='"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
        >
          Integrate with your existing tools
        </Typography>

        {/* Animated Arc Path */}
        <Box className="arc-container">
          <svg width="100%" height="300" viewBox="50 100 700 300">
            <path
              ref={pathRef}
              d="M 100 400 Q 600 -10 1000 400"
              fill="none"
              stroke="transparent"
            />
          </svg>

          {/* Integration Icons */}
          <Box className="icon-track">
            {integrations.map((item) => (
              <Paper
                key={item.name}
                elevation={4}
                className="icon-card"
                onClick={() => {
                  setSelected(item.name);
                  setDescKey((prev) => prev + 1);
                }}
              >
                <img src={item.src} alt={item.name} />
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Description Pop-up */}
        {selected && (
          <Box
            key={descKey}
            className="integration-desc"
            sx={{
              opacity: 1,
              transition: 'opacity 0.5s ease-in-out',
              animation: 'fadeOutDesc 0.5s 2.5s forwards',
              '@keyframes fadeOutDesc': {
                to: {
                  opacity: 0,
                  visibility: 'hidden',
                },
              },
            }}
          >
            <Typography variant="h5">{selected}</Typography>
            <Typography variant="body1" color="black">
              {descriptions[selected]}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default IntegrationSection;
