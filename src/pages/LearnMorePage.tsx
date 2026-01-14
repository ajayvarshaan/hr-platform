import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './LearnMorePage.scss';

interface LearnMorePageProps {
  onNavigate: (path: string) => void;
}

const LearnMorePage: React.FC<LearnMorePageProps> = ({ onNavigate }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.learn-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      onNavigate(path);
    }, 300);
  };

  const handleButtonClick = (action: string) => {
    if (action === 'demo') {
      handleNavigation('/request-demo');
    } else if (action === 'pricing') {
      handleNavigation('/pricing');
    } else if (action === 'contact') {
      handleNavigation('/request-demo');
    }
  };

  const features = [
    {
      id: 1,
      title: 'Core HR Management',
      icon: '📋',
      description: 'Comprehensive employee data management with centralized profiles, document management, and workflow automation.',
      details: [
        'Employee onboarding & offboarding',
        'Document management system',
        'Organizational hierarchy',
        'Role-based access control',
        'Employee database with history'
      ]
    },
    {
      id: 2,
      title: 'Payroll & Benefits',
      icon: '💰',
      description: 'Complete payroll management with multi-country support and tax compliance.',
      details: [
        'Automated salary processing',
        'Multi-currency support',
        'Tax compliance & deductions',
        'Benefits administration',
        'Direct deposit management'
      ]
    },
    {
      id: 3,
      title: 'Time & Attendance',
      icon: '⏰',
      description: 'Track employee time, manage leaves, and optimize scheduling effortlessly.',
      details: [
        'Biometric attendance tracking',
        'Leave management system',
        'Shift planning & scheduling',
        'Mobile app access',
        'Real-time reporting'
      ]
    },
    {
      id: 4,
      title: 'Performance & Learning',
      icon: '⭐',
      description: 'Drive employee development with performance reviews and learning management.',
      details: [
        'Performance appraisals',
        'Goal tracking',
        'Training management',
        'Skill assessments',
        'Career development plans'
      ]
    },
    {
      id: 5,
      title: 'Recruitment & Onboarding',
      icon: '🎯',
      description: 'Streamline hiring and onboarding with collaborative tools.',
      details: [
        'Job posting management',
        'Applicant tracking',
        'Interview scheduling',
        'Onboarding workflows',
        'Document collection'
      ]
    },
    {
      id: 6,
      title: 'Analytics & Reporting',
      icon: '📊',
      description: 'Get insights with powerful analytics and customizable reports.',
      details: [
        'Custom dashboards',
        'Real-time analytics',
        'Headcount reporting',
        'Payroll analytics',
        'Attendance insights'
      ]
    }
  ];

  const benefits = [
    {
      number: '80%',
      label: 'Time Reduction',
      description: 'Reduce HR administrative workload by 80%'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      description: 'Enterprise-grade availability guaranteed'
    },
    {
      number: '100+',
      label: 'Integrations',
      description: 'Connect with your favorite tools seamlessly'
    },
    {
      number: '24/7',
      label: 'Support',
      description: 'Dedicated support team always available'
    }
  ];

  const faqs = [
    {
      q: 'Can I integrate with existing systems?',
      a: 'Yes, we offer 100+ pre-built integrations and a robust API for custom integrations with any system.'
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC2, and ISO 27001.'
    },
    {
      q: 'What about implementation time?',
      a: 'Most implementations are completed within 2-4 weeks. Our onboarding team will guide you through every step.'
    },
    {
      q: 'Can I customize workflows?',
      a: 'Yes, our platform offers extensive customization options for workflows, fields, and user roles.'
    }
  ];

  return (
    <Box className="learn-more-page">
      <Box className="learn-header">
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackIcon />}
            className="back-button"
            onClick={() => handleNavigation('/')}
          >
            Back to Home
          </Button>
        </Container>
      </Box>

      <Box id="hero-section" className={`hero-section learn-section ${isLoaded ? 'loaded' : ''}`}>
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="h2" className="hero-title">
              Complete HR Platform for Modern Businesses
            </Typography>
            <Typography variant="h6" className="hero-subtitle">
              Streamline your HR operations with our all-in-one solution designed for companies of all sizes.
            </Typography>
            <Box className="hero-cta">
              <Button 
                variant="contained" 
                className="btn-primary"
                onClick={() => handleButtonClick('demo')}
              >
                Request a Demo
              </Button>
              <Button 
                variant="outlined" 
                className="btn-secondary"
                onClick={() => handleButtonClick('pricing')}
              >
                View Pricing
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box id="benefits-section" className={`benefits-section learn-section ${visibleSections.has('benefits-section') ? 'visible' : ''}`}>
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Why Choose Our Platform
          </Typography>
          <Grid container spacing={3}>
            {benefits.map((benefit, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card className={`benefit-card animate-card`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardContent>
                    <Typography className="benefit-number">
                      {benefit.number}
                    </Typography>
                    <Typography className="benefit-label">
                      {benefit.label}
                    </Typography>
                    <Typography className="benefit-description">
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box id="features-section" className={`features-section learn-section ${visibleSections.has('features-section') ? 'visible' : ''}`}>
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Comprehensive Features
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={feature.id}>
                <Card 
                  className={`feature-card animate-card ${expandedCard === feature.id ? 'expanded' : ''}`}
                  onClick={() => setExpandedCard(expandedCard === feature.id ? null : feature.id)}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent>
                    <Box className="feature-icon">{feature.icon}</Box>
                    <Typography variant="h5" className="feature-title">
                      {feature.title}
                    </Typography>
                    <Typography className="feature-description">
                      {feature.description}
                    </Typography>
                    
                    <Box className="expand-indicator">
                      <KeyboardArrowDownIcon className={expandedCard === feature.id ? 'rotated' : ''} />
                    </Box>
                    
                    {expandedCard === feature.id && (
                      <Box className="feature-details">
                        <ul>
                          {feature.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box id="how-it-works" className={`how-it-works learn-section ${visibleSections.has('how-it-works') ? 'visible' : ''}`}>
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {[
              { step: '01', title: 'Assessment', desc: 'We analyze your current HR processes and requirements' },
              { step: '02', title: 'Setup', desc: 'Our team configures the platform to match your needs' },
              { step: '03', title: 'Training', desc: 'Comprehensive training for your team members' },
              { step: '04', title: 'Go Live', desc: 'Launch your new HR system and start benefiting immediately' }
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Box className={`process-card animate-card`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <Box className="step-number">{item.step}</Box>
                  <Typography variant="h6" className="step-title">{item.title}</Typography>
                  <Typography className="step-desc">{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box id="faq-section" className={`faq-section learn-section ${visibleSections.has('faq-section') ? 'visible' : ''}`}>
        <Container maxWidth="md">
          <Typography variant="h3" className="section-title">
            Frequently Asked Questions
          </Typography>
          <Box className="faq-list">
            {faqs.map((faq, idx) => (
              <Box key={idx} className={`faq-item animate-card`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <Typography variant="h6" className="faq-question">
                  {faq.q}
                </Typography>
                <Typography className="faq-answer">
                  {faq.a}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box id="final-cta" className={`final-cta learn-section ${isLoaded ? 'loaded' : ''} ${visibleSections.has('final-cta') ? 'visible' : ''}`}>
        <Container maxWidth="lg">
          <Typography variant="h3">
            Ready to Transform Your HR?
          </Typography>
          <Typography variant="body1">
            Join thousands of companies already using our platform
          </Typography>
          <Box className="cta-buttons">
            <Button 
              variant="contained" 
              className="btn-primary-cta"
              onClick={() => handleButtonClick('demo')}
            >
              Schedule Demo
            </Button>
            <Button 
              variant="outlined" 
              className="btn-secondary-cta"
              onClick={() => handleButtonClick('contact')}
            >
              Contact Sales
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LearnMorePage;
