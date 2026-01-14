import React, { useEffect, useState } from 'react';
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
import BuiltForEveryone from './components/BuiltForEveryone';
import IntegrationSection from './components/IntegrationSection';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';

import ProductsPage from './pages/ProductsPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import SignInPage from './pages/SignInPage';
import RequestDemoPage from './pages/RequestDemoPage';
import LearnMorePage from './pages/LearnMorePage';
import TransferModal from './components/TransferModal';


import user1 from './assets/images/user1.jpg';
import user2 from './assets/images/user2.jpg';

const App: React.FC = () => {
  const [path, setPath] = useState<string>(window.location.pathname || '/');
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [authPromptOpen, setAuthPromptOpen] = useState(false);
  const [authPromptMessage, setAuthPromptMessage] = useState<React.ReactNode>('Please sign in to access this area.');
  const [authPromptAction, setAuthPromptAction] = useState<() => void>(() => () => {});

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    if (to === path) return;
    window.history.pushState({}, '', to);
    setPath(to);
  };

  const promptSignIn = (action?: () => void, message?: React.ReactNode) => {
    setAuthPromptMessage(message || 'Please sign in to access this area.');
    setAuthPromptAction(() => action || (() => navigate('/signin')));
    setAuthPromptOpen(true);
  };

  return (
    <Box className="app">
      <Box className="header-wrapper">
        <AppBar position="static" color="default" elevation={0} className="header">
          <Toolbar className="toolbar">
            <Typography variant="h6" className="logo" onClick={() => navigate('/')}>Groupon</Typography>
            <Box className="nav-links">
              <Button className="black-button" onClick={() => isSignedIn ? navigate('/products') : promptSignIn(() => navigate('/signin'), 'Sign in to view Products')}>Products</Button>
              <Button className="black-button" onClick={() => isSignedIn ? navigate('/features') : promptSignIn(() => navigate('/signin'), 'Sign in to view Features')}>Features</Button>
              <Button className="black-button" onClick={() => isSignedIn ? navigate('/pricing') : promptSignIn(() => navigate('/signin'), 'Sign in to view Pricing')}>Pricing</Button>
              <Button className="black-button" onClick={() => isSignedIn ? navigate('/resources') : promptSignIn(() => navigate('/signin'), 'Sign in to view Resources')}>Resources</Button>
            </Box>
            <Box className="nav-actions">
              <Button variant="text" className="sign-in" onClick={() => navigate('/signin')}>Sign in</Button>
              <Button variant="contained" className="demo-button" onClick={() => navigate('/request-demo')}>Request a Demo</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

    
      <Container maxWidth="md" className="landing-container">
        <Box className="network">
       
          <img src={user1} alt="User 1" />
          <Box className="icon-box main"><ManIcon /></Box>
          <Box className="icon-box yellow"><EmojiObjectsIcon /></Box>
          <Box className="icon-box blue"><CelebrationIcon /></Box>
          <Box className="icon-box main"><LightbulbIcon /></Box>
          <Box className="icon-box red"><ShieldIcon /></Box>
          <Box className="icon-box gray"><VisibilityIcon /></Box>
          <Box className="icon-box green"><SupportAgentIcon /></Box>
          <img src={user2} alt="User 2" />
        </Box>

        <Typography variant="h3" className="headline">
          All-in-one HR platform
        </Typography>
        <Typography className="description">
          Groupon is a modern, all-in-one HR platform designed to perfectly fit your business needs.
        </Typography>
        <Button className="cta-button" onClick={() => navigate('/request-demo')}>Request a Demo</Button>
      </Container>

    
      {path === '/products' ? (
        <ProductsPage onNavigate={navigate} />
      ) : path === '/features' ? (
        <FeaturesPage onNavigate={navigate} />
      ) : path === '/pricing' ? (
        <PricingPage onNavigate={navigate} />
      ) : path === '/resources' ? (
        <ResourcesPage onNavigate={navigate} />
      ) : path === '/signin' ? (
        <SignInPage onSignIn={() => { setIsSignedIn(true); navigate('/'); }} onNavigate={navigate} />
      ) : path === '/request-demo' ? (
        <RequestDemoPage onNavigate={navigate} />
      ) : path === '/learn-more' ? (
        <LearnMorePage onNavigate={navigate} />
      ) : (
        <>
          <HeroSection onNavigate={navigate} />
          <BuiltForEveryone />
          <IntegrationSection />
          <TestimonialSlider />
          <Footer />
        </>
      )}

      <TransferModal
        open={authPromptOpen}
        title="Sign in required"
        message={authPromptMessage}
        onClose={() => setAuthPromptOpen(false)}
        onConfirm={() => { setAuthPromptOpen(false); authPromptAction(); }}
        confirmLabel="Sign in"
        cancelLabel="Cancel"
      />
    </Box>
  );
};

export default App;
