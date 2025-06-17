import React from 'react';
import './IntegrationSection.scss';
import { Box, Typography, Paper } from '@mui/material';

const integrations = [
  { name: 'Teams', src: '/icons/teams.png', rotate: -25 ,},
  { name: 'Gmail', src: '/icons/gmail.png', rotate: -5},
  { name: 'Loom', src: '/icons/loom.png', rotate: 0 },
  { name: 'Google Meet', src: '/icons/meet.png', rotate: 5 },
  { name: 'Outlook', src: '/icons/outlook.png', rotate: 25 },
];

const IntegrationSection: React.FC = () => {
  return (
    <Box className="integration-section">
      <Box className="top-icon">
        <img src="/icons/settings.png" alt="settings" />
      </Box>

      <Typography className="headline">
        Integrate with your existing <br />
        tools in seconds
      </Typography>

      <Box className="icon-curve">
        {integrations.map((item, index) => (
          <Paper
            key={item.name}
            elevation={4}
            className="icon-card"
            style={{
              transform: `rotate(${item.rotate}deg) translateY(${Math.abs(item.rotate) * 1.5}px)`,
              zIndex: index === 2 ? 5 : 1,
            }}
          >
            <img src={item.src} alt={item.name} />
          </Paper>
        ))}
      </Box>

      <Box className="integration-desc">
        <Typography variant="h6">Loom</Typography>
        <Typography variant="body2">
          Video feedback & communication
        </Typography>
      </Box>
    </Box>
  );
};

export default IntegrationSection;
