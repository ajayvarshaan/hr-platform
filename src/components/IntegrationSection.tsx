import React, { useEffect, useRef, useState } from 'react';
import './IntegrationSection.scss';
import { Box, Typography, Paper, Container } from '@mui/material';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const integrations = [
  { name: 'Teams', src: '/icons/teams.png' },
  { name: 'Gmail', src: '/icons/gmail.png' },
  { name: 'Loom', src: '/icons/loom.png' },
  { name: 'Google Meet', src: '/icons/meet.png' },
  { name: 'Outlook', src: '/icons/outlook.png' },
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
        delay: index * 2, // spacing between icons
      });
    });
  }, []);

  // Reset selection after 3 seconds
  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        setSelected(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [descKey]);

  return (
    <Box className="integration-section">
      <Container maxWidth="md">
        <Box className="top-icon">
          <img src="/icons/settings.png" alt="settings" />
        </Box>
        <Typography className="headline">
          Integrate with your existing tools
        </Typography>

        <Box className="arc-container">
          <svg width="100%" height="300" viewBox="0 0 700 300">
            <path
              ref={pathRef}
              d="M 50 250 Q 350 20 650 250"
              fill="none"
              stroke="transparent"
            />
          </svg>

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
