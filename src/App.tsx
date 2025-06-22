import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container
} from '@mui/material';

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ShieldIcon from '@mui/icons-material/Shield';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ManIcon from '@mui/icons-material/Man';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import './App.scss';
import HeroSection from './components/HeroSection';
import BuildForEveryone from './components/BuiltForEveryone';
import IntegrationSection from './components/IntegrationSection';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Box className="app">
      {/* ✅ Sticky wrapper with spacing */}
      <Box className="header-wrapper">
        <AppBar position="static" color="default" elevation={0} className="header">
          <Toolbar className="toolbar">
            <Typography variant="h6" className="logo">CoreShift</Typography>
            <Box className="nav-links" >
              <Button className="black-button">Product</Button>
              <Button className="black-button">Features</Button>
              <Button className="black-button">Pricing</Button>
              <Button className="black-button">Resources</Button>
            </Box>
            <Box className="nav-actions">
              <Button variant="text" className="sign-in">Sign in</Button>
              <Button variant="contained" className="demo-button">Request a Demo</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="md" className="landing-container">
        <Box className="network">
          <img src="/images/user1.jpg" alt="User 1" />
          <Box className="icon-box main"><ManIcon /></Box>
          <Box className="icon-box yellow"><EmojiObjectsIcon /></Box>
          <Box className="icon-box blue"><CelebrationIcon /></Box>
          <Box className="icon-box main"><LightbulbIcon /></Box>
          <Box className="icon-box red"><ShieldIcon /></Box>
          <Box className="icon-box gray"><VisibilityIcon /></Box>
          <Box className="icon-box green"><SupportAgentIcon /></Box>
          <img src="/images/user2.jpg" alt="User 2" />
        </Box>

        <Typography variant="h3" className="headline">
          All-in-one HR platform
        </Typography>
        <Typography className="description">
          CoreShift is a modern, all-in-one HR platform designed to perfectly fit your business needs.
        </Typography>
        <Button className="cta-button">Request a Demo</Button>
      </Container>

      <HeroSection />
      <BuildForEveryone />
      <IntegrationSection />
      <TestimonialSlider />
      <Footer />
    </Box>
  );
};

export default App;
